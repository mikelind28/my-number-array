import { Link } from "react-router";

export default function Header() {
  return (
    <>
      <div className="bg-slate-950" style={{ gridArea: "header-left" }} />
      <header className="bg-slate-950 px-5 py-3" style={{ gridArea: "header" }}>
        <Link to="/">
          <h1 className="font-mono text-2xl text-lime-200">
            myNumberArray<span className="text-amber-600">:</span>{" "}
            <span className="text-blue-300">number</span>
            <span className="text-lime-400">[]</span>
          </h1>
        </Link>
      </header>
      <div className="bg-slate-950" style={{ gridArea: "header-right" }} />
    </>
  );
}
