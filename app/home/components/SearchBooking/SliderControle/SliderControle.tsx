import React from "react";
import ArrowButtons from "./ArrowButtons";
import SmallSlide from "./SmallSlide";

function SliderControle() {
  return (
    <div className="flex flex-col  w-[30%] relative">
      <div className="absolute bottom-full right-0 left-0 w-full h-[calc(100%+120px)]">
        <SmallSlide />
      </div>
      <div className="bg-[#1CA8CB] w-full h-full m-auto flex justify-center items-center">
        <ArrowButtons />
      </div>
    </div>
  );
}

export default SliderControle;
