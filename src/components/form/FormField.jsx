import PropTypes from 'prop-types';

const FormField = ({ label = false, id, ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 w-full mb-1">
          {label}
        </label>
      )}

      <input className="w-full" {...props} autoComplete="off" />
    </div>
  );
};

FormField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default FormField;
