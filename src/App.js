import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import Error from "./components/Error";
import Contact from "./components/Contact";
import About from "./components/About";
import RestInfo from "./components/RestInfo";
import useOnlineStatus from "./utilities/useOnlineStatus";

const Layout = () => {
  let status = useOnlineStatus()

  return (
    <>
    <Header />
    {!status && (
      <h1 className="error">Seems like you are offline. Please check your internet connection!</h1>
    )}
    {status && <Outlet />}
  </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path:"/restaurants/:restId",
        element: <RestInfo/>
      }
    ],
  },
]);
export default Layout;

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
