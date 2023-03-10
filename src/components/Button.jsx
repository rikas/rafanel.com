import clsx from 'clsx';

const Button = ({ type, children }) => {
  const classes = clsx({
    'bg-black': true,
    'text-amareto': true,
    'text-base': true,
    'font-body': true,
    'font-bold': true,
    'px-10': true,
    'py-5': true,
    'shadow-md': true,
    'hover:bg-zinc-900': true,
    'active:bg-zinc-800': true,
    'duration-100': true,
    'ease-in-out': true,
    'whitespace-nowrap': true,
  });

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
};

export default Button;
