import PropTypes from 'prop-types';

const IconButton = ({ children, ...props }) => (
  <button
    type="button"
    className="p-1 transition-all ease-in-out bg-slate-200 active:bg-slate-400 active:text-slate-100 disabled:bg-slate-100 disabled:text-slate-300 rounded-full"
    {...props}
  >
    {children}
  </button>
);

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IconButton;
