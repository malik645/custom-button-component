"use client";

import { CustomButton } from "./CustomButton";

function ClientSideButtons() {
  return (
    <>
      <CustomButton
        className="text-sm font-normal text-white rounded-[12px] py-3 px-10 text-center bg-red-500"
        title="Button1"
        funcName={() => alert("Button1 clicked")}
      />
      <CustomButton
        className="text-sm font-normal text-white rounded-[12px] py-3 px-10 text-center bg-slate-500"
        title="Button2"
        funcName={() => alert("Button2 clicked")}
      />
      <CustomButton
        className="text-sm font-normal text-white rounded-[12px] py-3 px-10 text-center bg-blue-500"
        title="Button3"
        funcName={() => alert("Button3 clicked")}
      />
    </>
  );
}

export default ClientSideButtons;
