import { createBrowserRouter, redirect, RouterProvider } from "react-router";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import "./index.css";
import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import NumberArrayIndex from "./pages/NumberArrayIndex.tsx";
import CreateNumberArray from "./pages/CreateNumberArray.tsx";
import NumberMethodsHome from "./pages/NumberMethodsHome.tsx";

import At from "./components/numberArray/methods/At.tsx";
import Concat from "./components/numberArray/methods/Concat.tsx";
import CopyWithin from "./components/numberArray/methods/CopyWithin.tsx";
import Every from "./components/numberArray/methods/Every.tsx";
import Fill from "./components/numberArray/methods/Fill.tsx";
import Filter from "./components/numberArray/methods/Filter.tsx";
import Find from "./components/numberArray/methods/Find.tsx";
import FindLast from "./components/numberArray/methods/FindLast.tsx";
import Includes from "./components/numberArray/methods/Includes.tsx";
import Join from "./components/numberArray/methods/Join.tsx";
import Map from "./components/numberArray/methods/Map.tsx";
import Pop from "./components/numberArray/methods/Pop.tsx";
import Push from "./components/numberArray/methods/Push.tsx";
import Reduce from "./components/numberArray/methods/Reduce.tsx";
import Shift from "./components/numberArray/methods/Shift.tsx";
import Slice from "./components/numberArray/methods/Slice.tsx";
import Some from "./components/numberArray/methods/Some.tsx";
import Sort from "./components/numberArray/methods/Sort.tsx";
import Splice from "./components/numberArray/methods/Splice.tsx";
import Reverse from "./components/numberArray/methods/Reverse.tsx";
import Unshift from "./components/numberArray/methods/Unshift.tsx";
import With from "./components/numberArray/methods/With.tsx";
import Welcome from "./components/numberArray/methods/Welcome.tsx";
import ErrorBoundary from "./pages/ErrorPage.tsx";

async function createNumberArrayAction({ request }: { request: Request }) {
  const formData = await request.formData();
  const numbers = Array.from(formData.values()).map(Number);
  localStorage.setItem("myNumberArray", JSON.stringify(numbers));
  return redirect("/number-array/methods");
}

function storedArrayLoader() {
  const storedArray = localStorage.getItem("myNumberArray");

  if (storedArray) {
    return JSON.parse(storedArray);
  } else {
    return [];
  }
}

let router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        Component: Home,
        loader: storedArrayLoader,
      },
      {
        path: "number-array",
        children: [
          {
            index: true,
            Component: NumberArrayIndex,
            loader: storedArrayLoader,
          },
          {
            path: "create",
            Component: CreateNumberArray,
            action: createNumberArrayAction,
          },
          {
            path: "methods",
            Component: NumberMethodsHome,
            loader: storedArrayLoader,
            children: [
              {
                index: true,
                Component: Welcome,
              },
              {
                path: "at",
                Component: At,
                loader: storedArrayLoader,
              },
              {
                path: "concat",
                Component: Concat,
                loader: storedArrayLoader,
              },
              {
                path: "copy-within",
                Component: CopyWithin,
                loader: storedArrayLoader,
              },
              {
                path: "every",
                Component: Every,
                loader: storedArrayLoader,
              },
              {
                path: "fill",
                Component: Fill,
                loader: storedArrayLoader,
              },
              {
                path: "filter",
                Component: Filter,
                loader: storedArrayLoader,
              },
              {
                path: "find",
                Component: Find,
                loader: storedArrayLoader,
              },
              {
                path: "find-last",
                Component: FindLast,
                loader: storedArrayLoader,
              },
              {
                path: "includes",
                Component: Includes,
                loader: storedArrayLoader,
              },
              {
                path: "join",
                Component: Join,
                loader: storedArrayLoader,
              },
              {
                path: "map",
                Component: Map,
                loader: storedArrayLoader,
              },
              {
                path: "pop",
                Component: Pop,
                loader: storedArrayLoader,
              },
              {
                path: "push",
                Component: Push,
                loader: storedArrayLoader,
              },
              {
                path: "reduce",
                Component: Reduce,
                loader: storedArrayLoader,
              },
              {
                path: "reverse",
                Component: Reverse,
                loader: storedArrayLoader,
              },
              {
                path: "shift",
                Component: Shift,
                loader: storedArrayLoader,
              },
              {
                path: "slice",
                Component: Slice,
                loader: storedArrayLoader,
              },
              {
                path: "some",
                Component: Some,
                loader: storedArrayLoader,
              },
              {
                path: "sort",
                Component: Sort,
                loader: storedArrayLoader,
              },
              {
                path: "splice",
                Component: Splice,
                loader: storedArrayLoader,
              },
              {
                path: "unshift",
                Component: Unshift,
                loader: storedArrayLoader,
              },
              {
                path: "with",
                Component: With,
                loader: storedArrayLoader,
              },
            ],
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
