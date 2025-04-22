import { ButtonHTMLAttributes } from "react";
import Link from "next/link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "default" | "outline" | "secondary" | "destructive";
  size?: "sm" | "default" | "lg";
  icon?: React.ReactNode;
}

const getButtonClasses = (
  variant: ButtonProps["variant"] = "default",
  size: ButtonProps["size"] = "default",
  className?: string
) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-950 disabled:pointer-events-none disabled:opacity-50";
  
  const variantClasses = {
    default: "bg-purple-600 text-white hover:bg-purple-700",
    destructive: "bg-red-500 text-white hover:bg-red-600",
    outline: "border border-purple-600 text-purple-600 hover:bg-purple-100 hover:text-purple-700",
    secondary: "bg-purple-100 text-purple-900 hover:bg-purple-200",
  };
  
  const sizeClasses = {
    sm: "h-9 rounded-md px-3",
    default: "h-10 px-4 py-2",
    lg: "h-11 rounded-md px-8",
  };
  
  return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className || ""}`.trim();
};

export function Button({
  className,
  variant = "default",
  size = "default",
  href,
  children,
  icon,
  ...props
}: ButtonProps) {
  const buttonClasses = getButtonClasses(variant, size, className);
  
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
        {icon && <span className="ml-2">{icon}</span>}
      </Link>
    );
  }
  
  return (
    <button
      className={buttonClasses}
      {...props}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
}