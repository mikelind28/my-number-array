import { Link } from "react-router";

export default function Header() {
  return (
    <header>
      <Link
        to='/'
      >
        <h1 className="text-center font-mono text-2xl text-lime-200">
          myNumberArray: number[]
        </h1>
      </Link>
    </header>
  );
}
