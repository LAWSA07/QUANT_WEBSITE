import React from "react";

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
}

const Testimonial = ({ quote, name, title }: TestimonialProps) => {
  return (
    <div className="text-center max-w-3xl mx-auto py-12">
      <div className="relative">
        <div className="text-3xl text-slate-300 absolute -top-6 -left-4 md:-left-8">&quot;</div>
        <p className="text-lg md:text-xl text-slate-700 italic mb-8">
          {quote}
        </p>
        <div className="text-3xl text-slate-300 absolute -bottom-6 -right-4 md:-right-8">&quot;</div>
      </div>
      <hr className="w-16 border-t-2 border-purple-500 mx-auto mb-6" />
      <h4 className="font-medium">{name}</h4>
      <p className="text-sm text-slate-500">{title}</p>
    </div>
  );
};

export default Testimonial; 