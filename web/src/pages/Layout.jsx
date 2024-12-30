import Header from "../components/LayoutComponents/Header";
import Footer from "../components/LayoutComponents/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
