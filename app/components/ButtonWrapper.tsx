import type { ReactNode } from "react";

type ButtonWrapperProps = {
  disabled: boolean | undefined;
  children: ReactNode;
};

export default function ButtonWrapper({
  disabled,
  children,
}: ButtonWrapperProps) {
  return (
    <div
      className={`rounded-md border-2 px-4 py-2 ${disabled ? "border-gray-500 bg-gray-800 text-gray-400" : "border-lime-300 bg-lime-950 text-lime-300 cursor-pointer"}`}
    >
      {children}
    </div>
  );
}
