import { isRouteErrorResponse, useRouteError } from "react-router";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";

export default function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <>
        <Header />
        <div className="bg-slate-950" style={{ gridArea: "body-left" }} />
        <main
          className="flex w-full min-w-0 flex-col items-start divide-y divide-white/25 bg-slate-950"
          style={{ gridArea: "body" }}
        >
          <Breadcrumbs currentPage="Error!" />
          <div className="m-2 flex flex-col gap-2 rounded-sm bg-slate-800 p-4">
            <h1 className="text-2xl text-lime-400">
              Uh oh! Something went wrong:
            </h1>
            <h2 className="text-xl text-amber-500">
              {error.status} {error.statusText}
            </h2>
            <p className="text-base text-blue-300 italic">{error.data}</p>
          </div>
        </main>
        <div className="bg-slate-950" style={{ gridArea: "body-right" }} />
      </>
    );
  } else if (error instanceof Error) {
    return (
      <>
        <Header />
        <div className="bg-slate-950" style={{ gridArea: "body-left" }} />
        <main
          className="flex w-full min-w-0 flex-col items-start divide-y divide-white/25 bg-slate-950"
          style={{ gridArea: "body" }}
        >
          <Breadcrumbs currentPage="Error!" />
          <div className="m-2 flex flex-col gap-2 rounded-sm bg-slate-800 p-4">
            <h1 className="text-2xl text-lime-400">
              Uh oh! Something went wrong:
            </h1>
            <h2 className="text-xl text-amber-500">{error.message}</h2>
            <p className="text-lg text-lime-500">The stack trace is:</p>
            <pre className="text-base text-blue-300 italic">{error.stack}</pre>
          </div>
        </main>
        <div className="bg-slate-950" style={{ gridArea: "body-right" }} />
      </>
    );
  } else {
    return (
      <>
        <Header />
        <div className="bg-slate-950" style={{ gridArea: "body-left" }} />
        <main
          className="flex w-full min-w-0 flex-col items-start divide-y divide-white/25 bg-slate-950"
          style={{ gridArea: "body" }}
        >
          <Breadcrumbs currentPage="Error!" />
          <div className="m-2 flex w-[calc(100%-16px)] flex-col gap-2 rounded-sm bg-slate-800 p-4">
            <h1 className="w-full text-2xl text-lime-300">Unknown Error</h1>
          </div>
        </main>
        <div className="bg-slate-950" style={{ gridArea: "body-right" }} />
      </>
    );
  }
}
