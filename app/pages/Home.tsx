import { useLoaderData } from "react-router";
import MyArrayMenu from "../components/MyArrayMenu";

function About() {
  return (
    <div className="min-w-0 xs:p-5 px-5 py-7 leading-6" style={{ backgroundColor: 'color-mix(in oklab, oklch(27.4% 0.072 132.109) 50%, var(--color-slate-950))'}}>
      <h1 className="mb-4 font-mono text-3xl text-lime-300 underline decoration-dotted decoration-2 underline-offset-4">
        About
      </h1>

      <p className="mb-3 text-xl/7 font-light text-amber-300 max-w-md">
        Learn about JavaScript array methods by creating and manipulating your own number array.
      </p>

      <p className="text-lg/7 font-extralight text-lime-200 max-w-md">
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
      <div className='bg-slate-950' style={{ gridArea: 'body-left' }} />
      <main className="min-w-0 w-full h-full grid lg:grid-cols-[2fr_5fr] lg:grid-rows-1 grid-rows-[auto_auto_1fr] gap-px" style={{ gridArea: 'body' }}>
        <About />
        <MyArrayMenu array={myNumberArray} />
        <div className='bg-slate-950 lg:hidden' />
       </main>
      <div className='bg-slate-950' style={{ gridArea: 'body-right' }} />
    </>
  );
}
