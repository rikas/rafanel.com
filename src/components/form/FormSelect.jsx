const FormSelect = ({ children, ...props }) => {
  return (
    <div>
      <label htmlFor={props.id} className="block text-sm font-medium text-gray-700">
        {props.label}
      </label>
      <select {...props}>{children}</select>
    </div>
  );
};

export default FormSelect;
