import { Link, useRevalidator } from "react-router";
import ButtonWrapper from "./ButtonWrapper";
import MyArray from "./MyArray";
import { FaTrashAlt } from "react-icons/fa";
import { MdDataArray } from "react-icons/md";
import { RiParenthesesFill } from "react-icons/ri";

export default function MyArrayMenu({ array }: { array: number[] }) {
    const revalidator = useRevalidator();

    function clearFromStorage() {
        localStorage.removeItem('myNumberArray');
        revalidator.revalidate();
    }
    
    return (
        <div className="w-full max-w-150 my-2 p-4 sm:px-8 text-lime-500 h-full bg-gray-800 rounded-md">
            <code className="text-lg text-lime-300">
                myNumberArray: number[]
            </code>

            <div className="mt-3 mb-5 overflow-x-scroll">
                <MyArray array={array} />
            </div>

            <div className="w-full max-w-80 flex flex-col gap-2 items-stretch">
                <Link 
                    to="/number-array/create"
                    className="text-lg"
                >
                    <ButtonWrapper disabled={false}>
                        <div className="flex justify-between items-center">
                            Create a new number array
                            <MdDataArray className="size-5" />
                        </div>
                    </ButtonWrapper>
                </Link>

                <ButtonWrapper disabled={false}>
                    <div className="flex justify-between items-center">
                        <Link 
                            to="/number-array/methods"
                            className="text-lg"
                        >
                            Explore array methods
                        </Link>

                        <RiParenthesesFill className="size-5" />
                    </div>
                </ButtonWrapper>

                <div 
                    onClick={clearFromStorage}
                >
                    <ButtonWrapper disabled={array.length === 0}>
                        <div className="flex justify-between items-center">
                            <p className="text-lg">Clear myNumberArray</p>
                            <FaTrashAlt className="size-5" />
                        </div>
                    </ButtonWrapper>
                </div>
            </div>
        </div>
    );
}