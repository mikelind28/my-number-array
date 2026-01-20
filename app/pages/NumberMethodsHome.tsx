import MyArray from "../components/MyArray";
import { Link, Outlet, useLoaderData } from "react-router";
import DetailDisclosureView from "../components/numberArray/DetailDisclosureView";
import { IoIosArrowBack } from "react-icons/io";

export default function NumberMethodsHome() {
    const myNumberArray = useLoaderData();
    
    return (
        <div className="flex flex-col items-center">
            <title>myNumberArray | Methods</title>
            <div className="w-full max-w-150 px-4 flex flex-col items-start">
                <Link 
                    to="/"
                    className="mb-2 flex items-center gap-1 text-lime-600 text-lg"
                >
                    <IoIosArrowBack />
                    Home
                </Link>
                
                <div className="sticky max-w-full top-2 z-20 p-4 mb-2 flex flex-col gap-1 text-lime-500 h-full bg-gray-800 rounded-md outline-5 outline-gray-900 border border-lime-400">
                    <code>myNumberArray:</code>
                    <div className="overflow-x-scroll">
                        <MyArray array={myNumberArray} />
                    </div>
                </div>


                <DetailDisclosureView>
                    <Outlet />
                </DetailDisclosureView>
            </div>
        </div>
    );
}