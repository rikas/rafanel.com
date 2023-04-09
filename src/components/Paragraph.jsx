import PropTypes from 'prop-types';

const Paragraph = ({ centered = false, children }) => {
  return (
    <p className={`text-slate-700 text-base font-body antialised ${centered ? 'text-center' : ''}`}>
      {children}
    </p>
  );
};

Paragraph.propTypes = {
  centered: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Paragraph;
