import MyArray from "../components/MyArrayTable";
import { Link, useLoaderData } from "react-router";
import DetailDisclosureView from "../components/numberArray/DetailDisclosureView";
import { IoIosArrowBack } from "react-icons/io";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

export default function NumberMethodsHome() {
  const myNumberArray = useLoaderData();
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState("down");

  useMotionValueEvent(scrollY, "change", (current) => {
    const diff = current - scrollY.getPrevious()!;
    setScrollDirection(diff > 0 ? "down" : "up");
  });

  return (
    <>
      <title>myNumberArray | Methods</title>
      <main className="flex flex-col gap-4 items-start w-full max-w-215 mx-auto">
        <Link
          to="/"
          className="flex items-center gap-1 text-lg text-lime-600"
        >
          <IoIosArrowBack />
          Home
        </Link>

        <motion.div 
          layout
          style={{ position: scrollDirection === 'up' ? "sticky" : "static" }}
          className={`top-2 z-20 flex h-full w-full flex-col gap-1 rounded-md border border-lime-400 bg-gray-800 p-4 text-lime-500 outline-5 outline-gray-900 xs:p-5 sm:px-8`}
        >
          <code className="text-lime-400">myNumberArray:</code>
          <div className="overflow-x-scroll">
            <MyArray array={myNumberArray} />
          </div>
        </motion.div>

        <DetailDisclosureView />
      </main>
    </>
  );
}
