import { Link, useRevalidator } from "react-router";
import ButtonWrapper from "./ButtonWrapper";
import MyArrayTable from "./MyArrayTable";
import { FaTrashAlt } from "react-icons/fa";
import { MdDataArray } from "react-icons/md";
import { RiParenthesesFill } from "react-icons/ri";

export default function MyArrayMenu({ array }: { array: number[] }) {
  const revalidator = useRevalidator();

  function clearFromStorage() {
    localStorage.removeItem("myNumberArray");
    revalidator.revalidate();
  }

  return (
    <div className="h-full w-full flex flex-col gap-4 rounded-md bg-gray-800 p-4 text-lime-500 xs:p-5 sm:px-8">
      <p className="font-mono text-xl text-lime-300">
        myNumberArray: number[]
      </p>

      <div className="mb-1 overflow-x-auto">
        <MyArrayTable array={array} />
      </div>

      <div className="flex min-w-70 w-full max-w-80 flex-col gap-2">
        <Link to="/number-array/create" className="text-lg">
          <ButtonWrapper disabled={false}>
            <div className="flex gap-1 items-center justify-between">
              Create a new number array
              <MdDataArray className="size-5" />
            </div>
          </ButtonWrapper>
        </Link>

        <Link to="/number-array/methods" className="text-lg">
          <ButtonWrapper disabled={false}>
            <div className="flex items-center justify-between">
              Explore array methods
              <RiParenthesesFill className="size-5" />
            </div>
          </ButtonWrapper>
        </Link>

        <button type='button' onClick={clearFromStorage} className="text-lg">
          <ButtonWrapper disabled={array.length === 0}>
            <div className="flex items-center justify-between">
              Clear myNumberArray
              <FaTrashAlt className="size-5" />
            </div>
          </ButtonWrapper>
        </button>
      </div>
    </div>
  );
}
