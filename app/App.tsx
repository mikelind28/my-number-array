import Header from "./components/Header";
import { Outlet } from "react-router";

export default function App() {
  return (
    <div className="p-4 flex flex-col gap-4 min-w-85">
      <Header />
      <Outlet />
    </div>
  );
}
