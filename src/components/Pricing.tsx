import React from "react";
import { Check } from "lucide-react";
import { Button } from "../components/Button";

const tiers = [
  {
    name: "Startup",
    id: "tier-startup",
    href: "#",
    priceMonthly: "$49",
    description: "Perfect for small teams looking to get started.",
    features: [
      "5,000 documents per month",
      "10 templates included",
      "Basic analytics",
      "24-hour support response time",
      "Access to our API",
    ],
    mostPopular: false,
  },
  {
    name: "Pro",
    id: "tier-pro",
    href: "#",
    priceMonthly: "$99",
    description: "Ideal for growing businesses with complex needs.",
    features: [
      "25,000 documents per month",
      "Unlimited templates",
      "Advanced analytics dashboard",
      "4-hour support response time",
      "API access with higher rate limits",
      "Custom extraction fields",
    ],
    mostPopular: true,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "Custom",
    description: "Dedicated solution for large-scale operations.",
    features: [
      "Unlimited documents",
      "Custom integration support",
      "Dedicated account manager",
      "1-hour support response time",
      "Custom SLAs available",
      "On-premises deployment option",
    ],
    mostPopular: false,
  },
];

export default function Pricing() {
  return (
    <div id="pricing" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-purple-600">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Pricing plans for teams of all sizes
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Choose the plan that works best for your team. All plans include a 14-day free trial.
        </p>

        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-8 ring-1 ring-gray-200 ${
                tier.mostPopular
                  ? "bg-white shadow-xl"
                  : "bg-white/60 shadow-sm"
              }`}
            >
              <h3
                id={tier.id}
                className={`text-lg font-semibold leading-8 text-gray-900`}
              >
                {tier.name}
              </h3>
              {tier.mostPopular && (
                <p className="absolute -top-5 rounded-full bg-purple-600 px-3 py-1.5 text-xs font-medium text-white">
                  Most popular
                </p>
              )}
              <p className="mt-4 text-sm leading-6 text-gray-600">
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  {tier.priceMonthly}
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-600">
                  /month
                </span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={`mt-6 block w-full rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  tier.mostPopular
                    ? "bg-purple-600 hover:bg-purple-500 focus-visible:outline-purple-600"
                    : "bg-purple-600 hover:bg-purple-500 focus-visible:outline-purple-600"
                }`}
              >
                Get started
              </a>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check
                      className="h-6 w-5 flex-none text-purple-600"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 