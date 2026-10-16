export default function Button({ children, variant = 'primary', className = '', as = 'button', ...props }) {
  const baseClasses = 'inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2';
  const variants = {
    primary: 'bg-brand-700 text-white hover:bg-brand-800',
    secondary: 'border border-brand-200 bg-white text-brand-800 hover:bg-brand-50',
    ghost: 'border border-slate-200 bg-transparent text-slate-700 hover:bg-slate-100',
  };

  const Component = as;

  return (
    <Component className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
}
