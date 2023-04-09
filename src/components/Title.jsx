import PropTypes from 'prop-types';
import clsx from 'clsx';

const Title = ({ variant = 'h1', centered = false, bold, className = '', children, ...props }) => {
  const classes = clsx(className, {
    'font-normal': !bold,
    'font-extrabold': bold,
    'font-title': true,
    uppercase: true,
    antialiased: true,
    'text-4xl': variant === 'h1',
    'text-3xl': variant === 'h2',
    'text-2xl': variant === 'h3',
    'text-xl': variant === 'h4',
    'text-lg': variant === 'h5',
    'text-base': variant === 'h6',
    'md:text-5xl': variant === 'h1',
    'md:text-4xl': variant === 'h2',
    'md:text-3xl': variant === 'h3',
    'md:text-2xl': variant === 'h4',
    'md:text-xl': variant === 'h5',
    'md:text-lg': variant === 'h6',
    'text-center': centered,
  });

  const variants = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
  };

  const Component = variants[variant];

  return (
    <Component {...props} className={classes}>
      {children}
    </Component>
  );
};

Title.propTypes = {
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  centered: PropTypes.bool,
  bold: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Title;
