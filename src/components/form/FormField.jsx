import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

const FormField = ({ label = false, name, required, id, ...props }) => {
  const { register, getFieldState } = useFormContext();
  const { invalid, error } = getFieldState(name);

  const labelClasses = `block text-sm font-medium w-full mb-1 ${
    invalid ? 'text-red-500' : 'text-gray-700'
  }`;

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className={labelClasses}>
          {label}
          {required && '*'}
        </label>
      )}

      <input
        className={`w-full ${
          invalid ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''
        }`}
        autoComplete="off"
        {...register(name, { shouldUnregister: true })}
        {...props}
      />
      {invalid ? (
        <small className="text-red-500">{error.message}</small>
      ) : (
        <small className="text-transparent">No errors</small>
      )}
    </div>
  );
};

FormField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  required: PropTypes.bool,
};

export default FormField;
