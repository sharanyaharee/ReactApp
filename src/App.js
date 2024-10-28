import React,{Suspense, lazy} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import Error from "./components/Error";
import Contact from "./components/Contact";
import About from "./components/About";
// import RestInfo from "./components/RestInfo";
import useOnlineStatus from "./utilities/useOnlineStatus";
import Login from "./components/Login";
import Shimmer from "./components/Shimmer";

const RestInfo= lazy(()=> import("./components/RestInfo"))

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
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/restaurants/:restId",
        element:(<Suspense fallback={<Shimmer/>}> <RestInfo/></Suspense>)
      },
      {
        path:"/login",
        element:<Login/>
      }
    ],
  },
]);
export default Layout;

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
