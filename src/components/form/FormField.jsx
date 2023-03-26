const FormField = ({ label = false, ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={props.id} className="block text-sm font-medium text-gray-700 w-full mb-1">
          {label}
        </label>
      )}

      <input className="w-full" {...props} autoComplete="off" />
    </div>
  );
};

export default FormField;
