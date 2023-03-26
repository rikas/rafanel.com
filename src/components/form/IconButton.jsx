const IconButton = ({ children, ...props }) => (
  <button
    type="button"
    className="bg-slate-200 hover:bg-slate-400 hover:text-slate-100 disabled:bg-slate-100 disabled:text-slate-300 rounded-full"
    {...props}
  >
    {children}
  </button>
);

export default IconButton;
