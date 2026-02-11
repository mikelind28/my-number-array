import { useLoaderData } from "react-router";
import MyArrayMenu from "../components/MyArrayMenu";

export default function Home() {
  const myNumberArray = useLoaderData();

  return (
    <main className="flex flex-col items-center gap-4 w-full max-w-215 mx-auto">
      <div className="rounded-md bg-lime-950/50 p-4 leading-6 xs:p-5 sm:px-8">
        <h1 className="mb-3 font-mono text-2xl text-lime-200">About</h1>

        <p className="mb-3 text-lg/6 font-light text-lime-400">
          Create your own array. Learn about JavaScript array methods, and try
          them out for yourself.
        </p>

        <p className="font-extralight text-lime-500">
          JavaScript arrays can store many different data types. For
          consistency, and for the purposes of demonstration, myNumberArray
          limits users to an array of numbers.
        </p>
      </div>

      <MyArrayMenu array={myNumberArray} />
    </main>
  );
}
