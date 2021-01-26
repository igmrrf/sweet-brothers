const Layout = ({ children }) => {
  return (
    <div>
      <h1>Layout Header</h1>
      {children}
      <h3>Layout Footer</h3>
    </div>
  );
};

export default Layout;
