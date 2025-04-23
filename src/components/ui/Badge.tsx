import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
}

const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'default',
  size = 'md' 
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-full";
  
  const variantClasses = {
    default: "bg-gray-100 text-gray-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-amber-100 text-amber-800",
    error: "bg-red-100 text-red-800",
    info: "bg-blue-100 text-blue-800"
  };
  
  const sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-2.5 py-0.5",
    lg: "text-base px-3 py-1"
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;
  
  return (
    <span className={classes}>
      {children}
    </span>
  );
};

export default Badge;