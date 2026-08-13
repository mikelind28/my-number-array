import MyArrayTable from "../components/MyArrayTable";
import { useLoaderData } from "react-router";
import DetailDisclosureView from "../components/numberArray/DetailDisclosureView";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";

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
      <div className="bg-slate-950" style={{ gridArea: "body-left" }} />
      <main
        className="flex min-w-0 flex-col items-start divide-y divide-white/25 bg-slate-950"
        style={{ gridArea: "body" }}
      >
        <Breadcrumbs currentPage="Explore array methods" />

        <motion.div
          layout
          style={{ position: scrollDirection === "up" ? "sticky" : "static" }}
          className={`top-0 z-20 flex w-full max-w-220 min-w-0 flex-col gap-3 bg-slate-900 p-3 pt-4 pb-7 text-lime-500 lg:border-r lg:border-white/25`}
        >
          <code className="text-xl text-lime-300">myNumberArray:</code>
          <div className="overflow-x-scroll">
            <MyArrayTable array={myNumberArray} />
          </div>
        </motion.div>

        <DetailDisclosureView />
      </main>
      <div className="bg-slate-950" style={{ gridArea: "body-right" }} />
    </>
  );
}
