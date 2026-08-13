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
    <div className="min-w-0 xs:p-5 flex h-full w-full flex-col gap-4 bg-slate-900 px-4 py-6 text-lime-500">
      <code className="text-xl text-lime-300">myNumberArray:</code>

      <div className="mb-1 overflow-x-auto">
        <MyArrayTable array={array} />
      </div>

      <div className="flex w-full max-w-80 flex-col gap-2">
        <Link to="/number-array/create" className="text-lg">
          <ButtonWrapper style="normal">
            <div className="flex items-center justify-between gap-1">
              Create a new number array
              <MdDataArray className="size-5" />
            </div>
          </ButtonWrapper>
        </Link>

        <Link to="/number-array/methods" className="text-lg">
          <ButtonWrapper style="yellow">
            <div className="flex items-center justify-between">
              Explore array methods
              <RiParenthesesFill className="size-5" />
            </div>
          </ButtonWrapper>
        </Link>

        <button type="button" onClick={clearFromStorage} className="text-lg">
          <ButtonWrapper style={array.length === 0 ? "disabled" : "warning"}>
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
