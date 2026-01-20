import Header from "./components/Header";
import { Outlet } from "react-router";

export default function App() {
  return (
    <div className="min-w-[340px] max-w-screen">
      <Header />
      <Outlet />
    </div>
  )
}
