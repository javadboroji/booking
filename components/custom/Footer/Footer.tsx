import React from "react";
import Subscribe from "./localComponent/Subscribe";
import Main from "./localComponent/Main";

function Footer() {
  return (
    <div className="bg-[#113D48] lg:p-16 p-4 lg:mt-14 mt-7">
      <div className="container mx-auto flex flex-col">
        <Subscribe />

        <Main/>
      </div>
    </div>
  );
}

export default Footer;
