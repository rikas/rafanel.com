import clsx from 'clsx';

const Button = ({ type, children, variant = 'solid', ...props }) => {
  const classes = clsx(
    'text-white',
    'text-base',
    'font-body',
    'font-medium',
    'px-8',
    'py-3',
    'hover:bg-zinc-700',
    'hover:border-zinc-700',
    'hover:text-white',
    'active:bg-zinc-600',
    'active:border-zinc-600',
    'duration-200',
    'ease-in-out',
    'whitespace-nowrap',
    'font-title',
    'border',
    'border-zinc-900',
    {
      'bg-zinc-900': variant === 'solid',
    },
    {
      'bg-white text-zinc-900': variant === 'outline',
      'border-zinc-900': variant === 'outline',
    },
  );

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
