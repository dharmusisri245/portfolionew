import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Marquee from "./Marquee";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Marquee />
      <main className="">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
