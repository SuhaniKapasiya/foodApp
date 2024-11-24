import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { lazy } from "react";

import Header from "./components/Header";
import Body from "./components/Body";

// import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { BrowserRouter, Routes, Route,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";


const AppLayout = () => {

  
   const Grocery = lazy(() => import("./components/Grocery"));
  return (
    <BrowserRouter>
      <div>
        {/* Header */}
        <Header />

        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/restaurant/:resid" element={<RestaurantMenu />} />

          <Route
            path="/grocery"
            element={
              <Suspense fallback ={<h1>Loading</h1>}>
                <Grocery />
              </Suspense>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>

        {/* Footer */}
      </div>
    </BrowserRouter>
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
