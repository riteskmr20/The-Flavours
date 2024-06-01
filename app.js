import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import ResMenu from "./src/components/ResMenu";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import Cart from "./src/components/Cart";

// import LogoImage from "./Img/Logo.png";

/**
 * Header
 *   -logo
 *   -Nav bar
 * Body
 *  -search
 *  -ResturantContainer
 *     -RestaurantCard
 *        -Img
 *        -Name of Res,Star Rating,cuisins,etc.
 * Footer
 *   -Copyright
 *   -Links
 *   -Address
 *   -Contact
 */



const AppLayout = () => {
  return (
    <Provider store={appStore}>
    <div className="app">
      <Header />
      <Outlet/>
    </div>
    </Provider>
  );
};


const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      
      {
        path:"/restaurants/:resId",
        element:<ResMenu/>,
      },
      {
        path:"/cart",
        element:<Cart/>,
      }
    ],
   
  },
  
  
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
