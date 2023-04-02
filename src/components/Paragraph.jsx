import clsx from 'clsx';

const Paragraph = ({ centered = false, children }) => {
  return (
    <p className={`text-slate-700 text-base font-body antialised ${centered ? 'text-center' : ''}`}>
      {children}
    </p>
  );
};

export default Paragraph;
