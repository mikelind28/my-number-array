import { AnimatePresence, motion } from "motion/react";
import { type ReactNode } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";

type DetailElementProps = {
  textContent: string;
  isOpen: boolean;
  onToggle: () => void;
  children?: ReactNode;
};

// TODO: indicate whether the method modifies the original array, or returns a new one — i.e., in the <summary>, indicate the return value's type.
// TODO?: clearly show the methods' inputs and their types?
function DetailElement({
  textContent,
  isOpen,
  onToggle,
  children,
}: DetailElementProps) {
  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    onToggle();
  }

  return (
    <details
      open={isOpen}
      className={`details max-w-220 bg-slate-800 has-focus-visible:z-10 has-focus-visible:outline-2 has-focus-visible:outline-amber-400 ${isOpen ? "rounded-xs border-2 border-lime-400" : ""}`}
    >
      <motion.summary
        onClick={handleClick}
        className="px-3 pt-2 pb-1 text-lime-300"
        style={
          isOpen ? { borderBottom: "1px solid rgba(255,255,255,0.25" } : {}
        }
      >
        <code className="ml-1 text-lg">{textContent}</code>
      </motion.summary>

      <div className="overflow-hidden">
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-3 rounded-xs bg-slate-900 px-3 pt-5 pb-8 text-base text-lime-300 md:px-4"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </details>
  );
}

const pathBase = "/number-array/methods";

const methods = [
  { textContent: "Welcome!", url: "" },
  { textContent: ".at()", url: "/at" },
  { textContent: ".concat()", url: "/concat" },
  { textContent: ".copyWithin()", url: "/copy-within" },
  { textContent: ".every()", url: "/every" },
  { textContent: ".fill()", url: "/fill" },
  { textContent: ".filter()", url: "/filter" },
  { textContent: ".find()", url: "/find" },
  { textContent: ".findLast()", url: "/find-last" },
  { textContent: ".includes()", url: "/includes" },
  { textContent: ".join()", url: "/join" },
  { textContent: ".map()", url: "/map" },
  { textContent: ".pop()", url: "/pop" },
  { textContent: ".push()", url: "/push" },
  { textContent: ".reduce()", url: "/reduce" },
  { textContent: ".reverse()", url: "/reverse" },
  { textContent: ".shift()", url: "/shift" },
  { textContent: ".slice()", url: "/slice" },
  { textContent: ".some()", url: "/some" },
  { textContent: ".sort()", url: "/sort" },
  { textContent: ".splice()", url: "/splice" },
  { textContent: ".unshift()", url: "/unshift" },
  { textContent: ".with()", url: "/with" },
] as const;

export default function DetailDisclosureView() {
  const location = useLocation();
  const navigate = useNavigate();

  const activePath = location.pathname.startsWith(pathBase)
    ? location.pathname.slice(pathBase.length)
    : null;

  function handleToggle(url: string) {
    navigate(activePath === url ? pathBase : `${pathBase}${url}`);
  }

  return (
    <div className="flex w-full max-w-220 flex-col gap-px bg-white/25 lg:border-r lg:border-white/25">
      {methods.map(({ textContent, url }) => {
        const isOpen = activePath === url;
        return (
          <DetailElement
            key={url}
            textContent={textContent}
            isOpen={isOpen}
            onToggle={() => handleToggle(url)}
          >
            {isOpen && <Outlet />}
          </DetailElement>
        );
      })}
    </div>
  );
}
