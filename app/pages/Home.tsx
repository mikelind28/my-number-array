import { useLoaderData } from "react-router";
import MyArrayMenu from "../components/MyArrayMenu";

export default function Home() {
    const myNumberArray = useLoaderData();
    
    return (
        <div className="px-4 py-2 flex flex-col items-center">
            <h1 className="my-2 text-2xl sm:text-3xl text-lime-300 font-extralight">Welcome to myNumberArray!</h1>

            <div className="max-w-150 my-4 p-4 sm:px-8 text-lime-500 leading-6 bg-lime-950/50 rounded-lg">
                <p className="text-lg sm:text-xl">
                    <span className="text-xl sm:text-2xl">myNumberArray</span> is an application that allows you to create your own array, and then explore some of the common methods available to JavaScript arrays.
                </p>
                <br/>
                <p className="font-extralight">
                    JavaScript arrays can store many different data types, but for consistency, myNumberArray limits users to an array of numbers. Click an option below to get started!
                </p>
            </div>

            <MyArrayMenu array={myNumberArray} />
        </div>
    );
}