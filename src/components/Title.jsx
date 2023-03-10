import clsx from 'clsx';

const Title = ({ bold, children }) => {
  const classes = clsx({
    'font-normal': !bold,
    'font-extrabold': bold,
    'text-4xl': true,
    'md:text-5xl': true,
    'font-title': true,
    uppercase: true,
    antialiased: true,
  });

  return <h1 className={classes}>{children}</h1>;
};

export default Title;
