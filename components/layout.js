import Nav from "./nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="container">{children}</div>
    </>
  );
};
export default Layout;
