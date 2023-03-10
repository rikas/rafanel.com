const PageContainer = ({ children }) => (
  <div className="bg-amareto min-h-screen p-5 md:p-10">
    <div className="mx-auto max-w-4xl flex flex-wrap gap-5 sm:gap-10 xl:gap-20">{children}</div>
  </div>
);

export default PageContainer;
