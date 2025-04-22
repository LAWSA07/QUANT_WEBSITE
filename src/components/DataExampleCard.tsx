import React from "react";

interface DataExampleCardProps {
  title: string;
  description: string;
  codeSnippet?: string;
}

const DataExampleCard = ({ title, description, codeSnippet }: DataExampleCardProps) => {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 overflow-hidden shadow-sm">
      <h3 className="mb-4 text-lg font-medium">{title}</h3>
      <p className="mb-6 text-sm text-slate-600">{description}</p>
      
      {codeSnippet && (
        <div className="bg-slate-50 rounded-md p-4 overflow-x-auto">
          <pre className="text-xs text-slate-700 font-mono">
            {codeSnippet}
          </pre>
        </div>
      )}
    </div>
  );
};

export default DataExampleCard; 