import MyArrayMenu from "../components/MyArrayMenu";
import { useLoaderData } from "react-router";

export default function NumberArrayIndex() {
  const myNumberArray = useLoaderData<number[]>();

  return (
    <>
      <div className="bg-slate-950" style={{ gridArea: "body-left" }} />
      <div
        className="flex min-w-0 flex-col divide-y divide-white/25 bg-slate-950"
        style={{ gridArea: "body" }}
      >
        <MyArrayMenu array={myNumberArray} />
        <div className="h-full bg-slate-950" />
      </div>
      <div className="bg-slate-950" style={{ gridArea: "body-right" }} />
    </>
  );
}
