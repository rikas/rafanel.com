import PropTypes from 'prop-types';

const FormSelect = ({ children, id, label, ...props }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select {...props}>{children}</select>
    </div>
  );
};

FormSelect.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
};

export default FormSelect;
