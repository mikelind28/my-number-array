import { Link } from "react-router";

export default function Breadcrumbs({ currentPage }: { currentPage: string }) {
  return (
    <nav
      className="flex w-full items-baseline gap-2 px-5 py-3 text-xl"
      style={{
        backgroundColor:
          "color-mix(in oklab, oklch(27.4% 0.072 132.109) 50%, var(--color-slate-950))",
      }}
    >
      <Link
        to="/"
        className="font-light text-lime-500 underline underline-offset-2"
      >
        Home
      </Link>
      <p className="text-lime-600">/</p>
      <p className="font-medium text-lime-400">{currentPage}</p>
    </nav>
  );
}