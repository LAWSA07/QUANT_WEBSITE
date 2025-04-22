export const GradientText = ({ text }: { text: string }) => {
  return (
    <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
      {text}
    </span>
  );
}; 