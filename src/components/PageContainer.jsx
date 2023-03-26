const PageContainer = ({ children }) => (
  <div className="bg-white min-h-screen px-5 py-10 md:px-10">
    <div className="mx-auto max-w-4xl flex flex-wrap gap-5 md:gap-18">{children}</div>
  </div>
);

export default PageContainer;
