import React, { Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { lazy } from "react";

import Header from "./components/Header";
import Body from "./components/Body";

// import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import {Provider} from  "react-redux"
import appStore from "./utils/appStore";
import Cart from "./components/Cart";



const AppLayout = () => {

  
   const Grocery = lazy(() => import("./components/Grocery"));
   const About = lazy(()=> import ("./components/About"))

   const [userName ,setUserName] = useState()


   useEffect(()=>{


    data = { loggedInUser: "suhani" };

    setUserName(data.loggedInUser);

   },[])

  return (
    <Provider store = {appStore} >
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <BrowserRouter>
          <div>
            {/* Header */}

            <Header />
            <Routes>
              <Route path="/" element={<Body />} />
              <Route
                path="/about"
                element={
                  <Suspense>
                    <About />
                  </Suspense>
                }
              />
              <Route path="/contact" element={<Contact />} />
              <Route path="/restaurant/:resid" element={<RestaurantMenu />} />

              <Route
                path="/grocery"
                element={
                  <Suspense fallback={<Shimmer />}>
                    <Grocery />
                  </Suspense>
                }
              />
              <Route path="/cart" element= {<Cart/>} />
              <Route path="*" element={<Error />} />
            </Routes>

            {/* Footer */}
          </div>
        </BrowserRouter>
      </UserContext.Provider>
    </Provider>
  );
};


// const AppLayout = () => {
//   return (
//     <div>
//       {/* Header */}
//       <Header />
//       <Outlet />

//       {/* Footer */}
//     </div>
//   );
// };


// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout />,
//     errorElement: <Error />,

//     children: [
//       {
//         path: "/",
//         element: <Body />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//       {
//         path: "/restaurant/:resid",
//         element: <RestaurantMenu />,
//       },
//     ],
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<RouterProvider router={appRouter} />);

root.render(<AppLayout />);
