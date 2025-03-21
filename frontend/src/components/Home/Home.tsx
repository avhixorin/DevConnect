import React from "react";
import LeftSideBar from "./LeftSideBar/LeftSideBar";
import RightSideBar from "./RightSideBar/RightSideBar";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full h-full max-h-[100dvh] flex bg-dashboard2 bg-center bg-no-repeat bg-cover dark:bg-[#0A0A0A]">
      <div className="w-full max-w-xs bg-transparent p-4  dark:bg-[#0A0A0A] hidden md:block">
        <LeftSideBar />
      </div>
      <main className="w-full h-full md:max-w-5xl overflow-y-auto scrollbar-webkit border-x dark:bg-[#141414]">
        <Outlet />
      </main>
      <div className="w-full max-w-xs bg-transparent p-4 overflow-y-auto scrollbar-thin scrollbar-webkit dark:bg-[#0A0A0A] hidden md:block">
        <RightSideBar />
      </div>
    </div>
  );
}
