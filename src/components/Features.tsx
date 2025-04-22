import React from "react";
import {
  ClipboardCheck,
  Database,
  Layers,
  LayoutGrid,
  LineChart,
  Workflow,
} from "lucide-react";

const features = [
  {
    name: "Template free",
    description:
      "Extract data from any document format without creating templates.",
    icon: Layers,
  },
  {
    name: "Structured output",
    description:
      "Get clean, structured JSON data extracted directly from your documents.",
    icon: LayoutGrid,
  },
  {
    name: "99.9% accuracy",
    description:
      "Our AI ensures high accuracy extraction with human-level precision.",
    icon: ClipboardCheck,
  },
  {
    name: "Document intelligence",
    description:
      "Advanced document understanding for smarter data extraction.",
    icon: Database,
  },
  {
    name: "Workflow automation",
    description:
      "Integrate with your existing systems to automate document workflows.",
    icon: Workflow,
  },
  {
    name: "Analytics dashboard",
    description:
      "Track extraction metrics and optimize your document processing.",
    icon: LineChart,
  },
];

export default function Features() {
  return (
    <div id="features" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-purple-600">
            Faster processing
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to process documents
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our AI-powered platform makes it easy to extract data from any
            document type with high accuracy and minimal setup.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
} 