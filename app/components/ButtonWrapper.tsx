import type { ReactNode } from "react";

type ButtonWrapperProps = {
  style: "normal" | "yellow" | "warning" | "disabled";
  children: ReactNode;
};

export default function ButtonWrapper({
  style = "normal",
  children,
}: ButtonWrapperProps) {
  return (
    <div
      className={`rounded-md border-2 px-4 py-2 ${style === "disabled" ? "border-gray-500 bg-gray-800 text-gray-400" : style === "normal" ? "cursor-pointer border-lime-300 bg-lime-950 text-lime-300" : style === "warning" ? "cursor-pointer border-rose-800 bg-rose-950 text-rose-300" : style === "yellow" ? "border-amber-600 bg-amber-950 text-amber-400" : ""}`}
    >
      {children}
    </div>
  );
}
