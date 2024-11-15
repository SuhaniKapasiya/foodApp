import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";

/**
 * Header
 * -Logo
 * -Nav Item
 * Body
 * -Search
 * -RestaurantContainer
 *   -RestaurantCard
 *     -Img
 *     -Name of Res ,Star Rating,cuisine,delvery time
 *
 * Footer
 * - Copyright
 * - Address
 * - Contact
 *
 */
const AppLayout = () => {
  return (
    <div>
     
      
      {/* Header */}
      <Header />
      {/* Body */}
      <Body/>
      {/* Footer */}
    </div>
  );
};



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);


