const Stack = ({ children, className, direction = 'row', as = 'div', gap = 0, ...props }) => {
  return (
    <as
      className={`flex ${direction === 'column' ? 'flex-col' : ''} gap-${gap} ${className}`}
      {...props}
    >
      {children}
    </as>
  );
};

export default Stack;
