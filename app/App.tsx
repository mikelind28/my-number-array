import Header from "./components/Header";
import { Outlet } from "react-router";

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
      {/* footer grid */}
      <div className="bg-slate-950" style={{ gridArea: "footer-left"}} />
      <div className="bg-slate-950" style={{ gridArea: "footer"}} />
      <div className="bg-slate-950" style={{ gridArea: "footer-right"}} />
    </>
  );
}
