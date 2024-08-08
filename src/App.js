import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import Scroll from "./components/Scroll";

const Layout = () => {
  return (
    <>
      <Header />
      <Scroll />
      <Body />
    </>
  );
};
export default Layout;

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Layout />);
