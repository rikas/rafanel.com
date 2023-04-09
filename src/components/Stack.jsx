import PropTypes from 'prop-types';

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

Stack.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  itemsCenter: PropTypes.bool,
  direction: PropTypes.oneOf(['column', 'row']),
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.func]),
  gap: PropTypes.number,
};

export default Stack;
