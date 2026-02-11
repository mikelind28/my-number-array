import { isRouteErrorResponse, Link, useRouteError } from "react-router";
import Header from "../components/Header";
import { IoIosArrowBack } from "react-icons/io";

export default function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="max-w-screen">
        <Header />
        <div className="flex w-full max-w-150 flex-col items-start px-2">
          <Link
            to="/"
            className="flex items-center gap-1 text-lg text-lime-600"
          >
            <IoIosArrowBack />
            Home
          </Link>
        </div>

        <div className="m-2 max-w-150 rounded-md bg-gray-800 p-4 sm:px-8">
          <h1 className="text-2xl text-lime-300">
            Uh oh! Something went wrong:
          </h1>
          <h2 className="text-xl text-lime-400">
            {error.status} {error.statusText}
          </h2>
          <p className="text-lg text-lime-500">{error.data}</p>
        </div>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div className="w-fit">
        <Header />

        <div className="m-2 w-fit rounded-md bg-gray-800 p-4 sm:px-8">
          <h1 className="text-2xl text-lime-300">
            Uh oh! Something went wrong.
          </h1>
          <h2 className="text-xl text-lime-400">{error.message}</h2>
          <p className="text-lg text-lime-500">The stack trace is:</p>
          <pre className="text-lime-600">{error.stack}</pre>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <div className="flex w-full max-w-150 flex-col items-start px-2">
          <Link
            to="/"
            className="mb-2 flex items-center gap-1 text-lg text-lime-600"
          >
            <IoIosArrowBack />
            Home
          </Link>
        </div>

        <div className="m-2 w-fit rounded-md bg-gray-800 p-4 sm:px-8">
          <h1 className="text-2xl text-lime-300">Unknown Error</h1>
        </div>
      </div>
    );
  }
}
