"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";
import { animate } from "framer-motion";

export interface GlowingEffectProps {
  blur?: number;
  inactiveZone?: number;
  proximity?: number;
  spread?: number;
  variant?: "glow" | "border" | "both";
  glow?: string;
  className?: string;
  disabled?: boolean;
  movementDuration?: number;
  borderWidth?: number;
}

export const GlowingEffect = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<GlowingEffectProps>
>(
  (
    {
      blur = 15,
      children,
      className = "",
      disabled = false,
      glow = "#fff",
      inactiveZone = 0.6,
      proximity = 400,
      spread = 80,
      variant = "glow",
      movementDuration = 300,
      borderWidth = 1,
    },
    ref
  ) => {
    const [isMounted, setIsMounted] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const mousePositionRef = useRef<{ x: number; y: number } | null>(null);
    const containerMeasurementsRef = useRef<{
      x: number;
      y: number;
      width: number;
      height: number;
    } | null>(null);
    const animationFrameRef = useRef<number | null>(null);

    const handleMouseMove = useCallback(
      (event: MouseEvent) => {
        if (disabled || !containerRef.current || !isMounted) return;

        mousePositionRef.current = { x: event.clientX, y: event.clientY };

        if (
          !containerMeasurementsRef.current ||
          !mousePositionRef.current ||
          !containerRef.current
        )
          return;

        const { x, y, width, height } = containerMeasurementsRef.current;
        const { x: mouseX, y: mouseY } = mousePositionRef.current;

        if (
          mouseX < x ||
          mouseX > x + width ||
          mouseY < y ||
          mouseY > y + height
        ) {
          const element = containerRef.current;
          if (!element) return;

          (
            element as HTMLDivElement & {
              style: Record<string, string>;
            }
          ).style.setProperty("--pointer-x", `${width / 2}px`);
          (
            element as HTMLDivElement & {
              style: Record<string, string>;
            }
          ).style.setProperty("--pointer-y", `${height / 2}px`);
          (
            element as HTMLDivElement & {
              style: Record<string, string>;
            }
          ).style.setProperty("--glow-distance", `${inactiveZone}`);
          (
            element as HTMLDivElement & {
              style: Record<string, string>;
            }
          ).style.setProperty("--glow-translate-x", `${0}px`);
          (
            element as HTMLDivElement & {
              style: Record<string, string>;
            }
          ).style.setProperty("--glow-translate-y", `${0}px`);
          return;
        }

        const centerX = x + width / 2;
        const centerY = y + height / 2;

        const distanceFromCenter = Math.sqrt(
          Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2)
        );

        const maxDistance = Math.sqrt(
          Math.pow(width / 2, 2) + Math.pow(height / 2, 2)
        );

        const dist = 1 - Math.min(distanceFromCenter / maxDistance, 1);

        const GLOW_DISTANCE = `${Math.max(dist, inactiveZone)}`;

        if (animationFrameRef.current !== null) {
          cancelAnimationFrame(animationFrameRef.current);
        }

        animationFrameRef.current = requestAnimationFrame(() => {
          if (!containerRef.current) return;

          (
            containerRef.current as HTMLDivElement & {
              style: Record<string, string>;
            }
          ).style.setProperty("--pointer-x", `${mouseX - x}px`);
          (
            containerRef.current as HTMLDivElement & {
              style: Record<string, string>;
            }
          ).style.setProperty("--pointer-y", `${mouseY - y}px`);
          (
            containerRef.current as HTMLDivElement & {
              style: Record<string, string>;
            }
          ).style.setProperty("--glow-distance", GLOW_DISTANCE);
          (
            containerRef.current as HTMLDivElement & {
              style: Record<string, string>;
            }
          ).style.setProperty(
            "--glow-translate-x",
            `${(centerX - mouseX) / 3}px`
          );
          (
            containerRef.current as HTMLDivElement & {
              style: Record<string, string>;
            }
          ).style.setProperty(
            "--glow-translate-y",
            `${(centerY - mouseY) / 3}px`
          );
        });
      },
      [disabled, inactiveZone, isMounted]
    );

    const handleScroll = useCallback(() => {
      if (!containerRef.current || !isMounted) return;

      containerMeasurementsRef.current = containerRef.current.getBoundingClientRect();

      if (disabled) return;
      handleMouseMove;
    }, [disabled, handleMouseMove, isMounted]);

    useEffect(() => {
      setIsMounted(true);
      
      if (!containerRef.current) return;

      containerMeasurementsRef.current = containerRef.current.getBoundingClientRect();

      if (disabled || !isMounted) return;

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("scroll", handleScroll);
        if (animationFrameRef.current !== null) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }, [handleMouseMove, handleScroll, disabled, isMounted]);

    return (
      <div
        ref={(node) => {
          containerRef.current = node;
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        className={`glow-container ${className}`}
        style={{
          position: "relative",
          "--glow-distance": `${inactiveZone}`,
          "--glow-blur": `${blur}px`,
          "--glow-spread": `${spread}px`,
          "--glow-color": glow,
          "--glow-prox": `${proximity}px`,
          "--glow-duration": `${movementDuration}ms`,
          "--glow-size": `${spread}px`,
          "--glow-opacity": "1",
          "--pointer-x": "50%",
          "--pointer-y": "50%",
          "--glow-translate-x": "0px",
          "--glow-translate-y": "0px",
          "--border-width": `${borderWidth}px`,
        } as React.CSSProperties}
      >
        <div
          className={`glow-content relative z-10`}
          style={{
            position: "relative",
            zIndex: 1,
          }}
        >
          {children}
        </div>
        {variant === "glow" || variant === "both" ? (
          <div
            className={`glow absolute inset-0 z-0 transition-opacity duration-500 ${
              disabled ? "opacity-0" : ""
            }`}
            style={{
              borderRadius: "inherit",
              position: "absolute",
              inset: 0,
              zIndex: 0,
              pointerEvents: "none",
              background: "transparent",
            }}
          />
        ) : null}
        {variant === "border" || variant === "both" ? (
          <div
            className={`glow-border absolute inset-0 z-0 transition-opacity duration-500 ${
              disabled ? "opacity-0" : ""
            }`}
            style={{
              borderRadius: "inherit",
              position: "absolute",
              inset: 0,
              zIndex: 0,
              pointerEvents: "none",
              backdropFilter: "none",
              WebkitBackdropFilter: "none",
            }}
          />
        ) : null}
      </div>
    );
  }
);

GlowingEffect.displayName = "GlowingEffect"; 