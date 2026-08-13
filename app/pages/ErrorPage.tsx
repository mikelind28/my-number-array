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
        <main className="min-w-0 flex w-full flex-col items-start divide-y divide-white/25 bg-slate-950" style={{ gridArea: "body" }}>
          <Breadcrumbs currentPage="Error!" />
          <div className="flex flex-col gap-2 m-2 rounded-sm bg-slate-800 p-4">
            <h1 className="text-2xl text-lime-400">
              Uh oh! Something went wrong:
            </h1>
            <h2 className="text-xl text-amber-500">
              {error.status} {error.statusText}
            </h2>
            <p className="text-base italic text-blue-300">{error.data}</p>
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
        <main className="min-w-0 flex w-full flex-col items-start divide-y divide-white/25 bg-slate-950" style={{ gridArea: "body" }}>
          <Breadcrumbs currentPage="Error!" />
          <div className="flex flex-col gap-2 m-2 rounded-sm bg-slate-800 p-4">
            <h1 className="text-2xl text-lime-400">
              Uh oh! Something went wrong:
            </h1>
            <h2 className="text-xl text-amber-500">
              {error.message}
            </h2>
            <p className="text-lg text-lime-500">The stack trace is:</p>
            <pre className="text-base italic text-blue-300">{error.stack}</pre>
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
        <main className="min-w-0 flex w-full flex-col items-start divide-y divide-white/25 bg-slate-950" style={{ gridArea: "body" }}>
          <Breadcrumbs currentPage="Error!" />
          <div className="flex flex-col gap-2 m-2 rounded-sm bg-slate-800 p-4 w-[calc(100%-16px)]">
            <h1 className="text-2xl text-lime-300 w-full">Unknown Error</h1>
          </div>
        </main>
        <div className="bg-slate-950" style={{ gridArea: "body-right" }} />
      </>
    );
  }
}
