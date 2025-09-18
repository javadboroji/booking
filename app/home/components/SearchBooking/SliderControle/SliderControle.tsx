import React from "react";
import ArrowButtons from "./ArrowButtons";
import SmallSlide from "./SmallSlide";

function SliderControle() {
  return (
    <div className="flex flex-col  lg:w-[30%] md:w-[50%] w-full relative">
      <div className="absolute bottom-full right-0 left-0 w-full lg:h-[calc(100%+120px)] md:h-[calc(100%+60px)] hidden md:flex">
        <SmallSlide />
      </div>
      <div className="bg-[#1CA8CB] w-full h-full m-auto flex justify-center items-center">
        <ArrowButtons />
      </div>
    </div>
  );
}

export default SliderControle;
