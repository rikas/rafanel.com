const Stack = ({
  children,
  className = '',
  itemsCenter = false,
  direction = 'column',
  as,
  gap = 0,
  ...props
}) => {
  const Component = as || 'div';
  return (
    <Component
      className={`flex ${direction === 'column' ? 'flex-col' : ''} ${
        itemsCenter ? 'items-center' : ''
      } gap-${gap} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Stack;
