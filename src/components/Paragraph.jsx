import PropTypes from 'prop-types';

const ParagraphSizes = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
  '7xl': 'text-7xl',
  '8xl': 'text-8xl',
  '9xl': 'text-9xl',
};

const Paragraph = ({ centered = false, size = 'base', children }) => {
  return (
    <p
      className={`text-slate-700 ${ParagraphSizes[size]} font-body antialised ${
        centered ? 'text-center' : ''
      }`}
    >
      {children}
    </p>
  );
};

Paragraph.propTypes = {
  centered: PropTypes.bool,
  size: PropTypes.oneOf[('xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl')],
  children: PropTypes.node.isRequired,
};

export default Paragraph;
