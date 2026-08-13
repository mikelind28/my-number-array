import { useLoaderData } from "react-router";
import MyArrayMenu from "../components/MyArrayMenu";

function About() {
  return (
    <div
      className="xs:p-5 min-w-0 px-5 py-7 leading-6"
      style={{
        backgroundColor:
          "color-mix(in oklab, oklch(27.4% 0.072 132.109) 50%, var(--color-slate-950))",
      }}
    >
      <h1 className="mb-4 font-mono text-3xl text-lime-300 underline decoration-dotted decoration-2 underline-offset-4">
        About
      </h1>

      <p className="mb-3 max-w-md text-xl/7 font-light text-amber-300">
        Learn about JavaScript array methods by creating and manipulating your
        own number array.
      </p>

      <p className="max-w-md text-lg/7 font-extralight text-lime-200">
        JavaScript arrays can store many different data types. For the purposes
        of demonstration, myNumberArray limits users to an array of numbers.
      </p>
    </div>
  );
}

export default function Home() {
  const myNumberArray = useLoaderData();

  return (
    <>
      <div className="bg-slate-950" style={{ gridArea: "body-left" }} />
      <main
        className="grid h-full w-full min-w-0 grid-rows-[auto_auto_1fr] gap-px lg:grid-cols-[2fr_5fr] lg:grid-rows-1"
        style={{ gridArea: "body" }}
      >
        <About />
        <MyArrayMenu array={myNumberArray} />
        <div className="bg-slate-950 lg:hidden" />
      </main>
      <div className="bg-slate-950" style={{ gridArea: "body-right" }} />
    </>
  );
}
