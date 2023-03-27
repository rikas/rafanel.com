const Stack = ({
  children,
  className,
  itemsCenter = false,
  direction = 'row',
  as = 'div',
  gap = 0,
  ...props
}) => {
  return (
    <as
      className={`flex ${direction === 'column' ? 'flex-col' : ''} ${
        itemsCenter ? 'items-center' : ''
      } gap-${gap} ${className}`}
      {...props}
    >
      {children}
    </as>
  );
};

export default Stack;
