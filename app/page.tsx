"use client";
import { CustomButton } from "@/components/CustomButton";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-between p-24">
      <CustomButton
        className="text-sm font-normal text-white rounded-[12px] py-3 px-10 text-center bg-red-500"
        title="Button1"
        onClick={() => alert("Button1 clicked")}
      />
      <CustomButton
        className="text-sm font-normal text-white rounded-[12px] py-3 px-10 text-center bg-slate-500"
        title="Button2"
        onClick={() => alert("Button2 clicked")}
      />
      <CustomButton
        className="text-sm font-normal text-white rounded-[12px] py-3 px-10 text-center bg-blue-500"
        title="Button3"
        onClick={() => alert("Button3 clicked")}
      />
    </main>
  );
}
