import MyArrayMenu from "../components/MyArrayMenu";
import { useLoaderData } from "react-router";

export default function NumberArrayIndex() {
  const myNumberArray = useLoaderData<number[]>();

  return (
    <>
      <div className="bg-slate-950" style={{ gridArea: "body-left" }} />
      <div className="min-w-0 bg-slate-950 flex flex-col divide-y divide-white/25" style={{ gridArea: "body" }} >
        <MyArrayMenu array={myNumberArray} />
        <div className="bg-slate-950 h-full" />
      </div>
      <div className="bg-slate-950" style={{ gridArea: "body-right" }} />
    </>
  );
}
