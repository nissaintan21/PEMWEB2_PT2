import type React from "react";

interface buttonProps {
  title: string; 
  variant: string;
  className?: string; // Tambahkan ini agar App.tsx tidak error
}

export const Button: React.FC<buttonProps> = ({ title, variant, className = "" }) => {
  const primary = "bg-blue-900 px-6 py-2 text-white rounded-full hover:bg-blue-800 transition-all";
  const outline = "border border-blue-900 px-6 py-2 text-blue-900 rounded-full hover:bg-blue-50 transition-all";

  return (
    <button 
      className={`${variant === "primary" ? primary : outline} ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;