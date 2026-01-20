import {
  isRouteErrorResponse,
  Link,
  useRouteError,
} from "react-router";
import Header from "../components/Header";
import { IoIosArrowBack } from "react-icons/io";

export default function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="max-w-screen">
        <Header />
        <div className="w-full max-w-150 px-2 flex flex-col items-start">
            <Link 
                to="/"
                className="flex items-center gap-1 text-lime-600 text-lg"
            >
                <IoIosArrowBack />
                Home
            </Link>
        </div>

        <div className="max-w-150 m-2 p-4 sm:px-8 bg-gray-800 rounded-md">
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

        <div className="w-fit m-2 p-4 sm:px-8 bg-gray-800 rounded-md">
            <h1 className="text-2xl text-lime-300">Uh oh! Something went wrong.</h1>
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
            <div className="w-full max-w-150 px-2 flex flex-col items-start">
                <Link 
                    to="/"
                    className="mb-2 flex items-center gap-1 text-lime-600 text-lg"
                >
                    <IoIosArrowBack />
                    Home
                </Link>
            </div>

            <div className="w-fit m-2 p-4 sm:px-8 bg-gray-800 rounded-md">
                <h1 className="text-2xl text-lime-300">Unknown Error</h1>
            </div>
        </div>
    );
  }
}