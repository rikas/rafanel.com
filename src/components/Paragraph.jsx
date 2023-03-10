import clsx from 'clsx';

const Paragraph = ({ children }) => {
  const classes = clsx({
    'text-slate-700': true,
    'text-base': true,
    'font-body': true,
    'text-sm': true,
    antialiased: true,
  });

  return <p className={classes}>{children}</p>;
};

export default Paragraph;
