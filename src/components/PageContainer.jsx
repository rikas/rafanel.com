import PropTypes from 'prop-types';

const PageContainer = ({ children }) => (
  <div className="bg-white min-h-screen px-5 py-10 md:px-10">
    <div className="mx-auto max-w-4xl flex flex-wrap">{children}</div>
  </div>
);

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContainer;
