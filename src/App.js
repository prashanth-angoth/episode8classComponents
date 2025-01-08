
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; // always import components when we are using structured files
import Body from "./components/Body"; 
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
/*initial low level design of swiggy clone apps
  Header
   -logo
   -Nav items
  Body
    - Search
    - RestaurantContainer
      -Restaurant Card
        -Name, img, star rating,cuisine
  Footer
   -Copyright
   -Links
   -Address
   -Contact
*/

// whenever we want to develop routing in our application, we have to create routing configuration in app.js file
// and then import the createBrowserRouter
// here we also import router provider this router provider will help us to provide the routing configuration to our application
// here we also import router which help us to load the components dynamically 
import { createBrowserRouter,RouterProvider,Outlet } from "react-router";
import RestaurantMenu from "./components/RestaurantMenu";
                

const Applayout=()=>{
  return (
    <div className="app">
      <Header></Header>
      <Outlet/>
    </div>
  )
}

// creating router configuration 

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {path:"/",element:<Body />},
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurants/:resId", element: <RestaurantMenu />  } // here in this path ":" it indicates that resId is a dynamic value 
    ], 
    //if there is an error in the path it'll show the error component
    errorElement: <Error />
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)
