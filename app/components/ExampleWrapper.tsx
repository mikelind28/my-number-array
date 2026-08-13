import type { ReactNode } from "react";

export default function ExampleWrapper({
  children,
}: {
  children: ReactNode | ReactNode[];
}) {
  return (
    <div className="flex max-w-150 flex-col gap-2 rounded-xs bg-slate-950/75 px-4 pt-5 pb-6 shadow-[inset_0px_1px_6px_rgba(0,0,0,0.5)]">
      {children}
    </div>
  );
}
