import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col padding-4 gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto">
      <div className="flex flex-col gap-4">
        <p>IT'S TIME TO GET</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          BIGGER N<span className="text-blue-400 font-medium"> STRONGER</span>
        </h1>
      </div>
      <p className="text-sm md:text-base font-light">
        I hereby acknowledgement that I may become the{" "}
        <span className="text-blue-400 font-medium">greatest</span> and the{" "}
        <span className="text-blue-400 font-medium">best</span> of all time
      </p>
      <Button func={() => {
        window.location.href = '#generate'
      }} text={"Accept & Begin"}></Button>
    </div>
  );
}
