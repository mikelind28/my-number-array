import type { ReactNode } from "react";

type ButtonWrapperProps = {
    disabled: boolean | undefined;
    children: ReactNode;
}

export default function ButtonWrapper({ disabled, children }: ButtonWrapperProps) {
    return (
        <div className={`px-4 py-2 rounded-md border-2 ${disabled ? "text-gray-400 bg-gray-800 border-gray-500" : "text-lime-300 bg-lime-950 border-lime-300 hover:cursor-pointer" }`}>
            {children}
        </div>
    );
}