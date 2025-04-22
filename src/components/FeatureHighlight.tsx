import { cn } from "../lib/utils";
import { BotIcon, GanttChartIcon, ZapIcon } from "lucide-react";

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ElementType;
  className?: string;
}

function Feature({
  title,
  description,
  icon: Icon,
  className,
}: FeatureProps) {
  return (
    <div className={cn("group relative", className)}>
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl bg-gray-50 transition motion-reduce:transition-none lg:block lg:group-hover:bg-gray-100 lg:group-hover:shadow-md lg:group-hover:shadow-gray-900/5"></div>
      <div className="relative z-10 mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 shadow-md shadow-gray-800/5 ring-1 ring-gray-900/5">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="relative z-10 mt-4 text-base font-semibold text-gray-900">
        {title}
      </h3>
      <p className="relative z-10 mt-3 text-sm text-gray-600">{description}</p>
    </div>
  );
}

export default function FeatureHighlight() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-purple-600">
            Extract faster
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to process documents at scale
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our platform streamlines document processing with AI, eliminating
            manual template creation and maximizing accuracy.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            src="./dashboard.png"
            alt="App screenshot"
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            width={2432}
            height={1442}
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]"></div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          <Feature
            title="AI-Powered Extraction"
            description="Our cutting-edge AI models extract data from any document format with high accuracy, eliminating the need for manual templates."
            icon={BotIcon}
          />
          <Feature
            title="Instant Processing"
            description="Process documents in seconds. Upload documents through our API or web interface and receive structured data immediately."
            icon={ZapIcon}
          />
          <Feature
            title="Workflow Integration"
            description="Seamlessly integrate with your existing workflows and systems through our robust API and pre-built integrations."
            icon={GanttChartIcon}
          />
        </div>
      </div>
    </div>
  );
} 