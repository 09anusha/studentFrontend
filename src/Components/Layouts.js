import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layouts(props) {
  return (
    <div className="layout-container">
      <Header />
      <main style={{ height: "80vh" }}>{props.children}</main>{" "}
      {/*vh is vertical height */}
      <Footer />
    </div>
  );
}

export default Layouts;
