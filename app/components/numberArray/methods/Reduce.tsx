import { useState, useEffect } from "react";
import { useLoaderData } from "react-router";

export default function Reduce() {
    const myNumberArray = useLoaderData();
    const [returnValue, setReturnValue] = useState(0);

    useEffect(() => {
        if (myNumberArray.length) {
            setReturnValue(myNumberArray.reduce(addAll));
        }
    }, [myNumberArray]);

    function addAll(accumulator: number, currentValue: number) {
        const returnValue = accumulator + currentValue;
        return returnValue;
    }

    return (
        <>
            <title>myNumberArray | .reduce() Method</title>
            <p>The <code>.reduce()</code> array method takes a "reducer" callback function as a parameter. This function will evaluate all elements in the array, returning a single value.</p>
            <br/>
            <p>Let's say you wanted to get the sum of all elements in an array of numbers. Your reducer function would look like this:</p>

            <div className="flex flex-col gap-2 my-2 p-2 bg-gray-950/75 rounded-sm">
                <div className="flex flex-wrap items-baseline leading-6">
                    <code>function addAll</code>
                    <code>(accumulator, currentValue){`{`}</code> 
                </div>
                <code className="ml-3">const returnValue = accumulator + currentValue;</code>
                <code className="ml-3">return returnValue;</code>
                <code>{`}`}</code>
            </div>

            <p>By default, the initial value for <code>accumulator</code> will be the first element of the array, and <code>currentValue</code> will be the second element of the array. The function is first executed with these values, and whatever the function returns becomes <code>accumulator</code> on the next runthrough, with <code>currentValue</code> becoming the next element in the array.</p>
            <br/>
            <p>When the last element in the array is reached, the <code>.reduce()</code> function returns the last returned value of the provided callback function.</p>

            <div className="flex flex-wrap items-baseline gap-2 my-2 p-2 bg-gray-950/75 rounded-sm">
                <div className="flex flex-wrap items-baseline leading-6">
                    <code>myNumberArray</code>
                    <code>.reduce(addAll)</code>
                </div>
                <p>returns:</p>
            </div>

            <div className="w-fit max-w-full bg-lime-950 rounded-md px-2 py-1 overflow-x-scroll">
                <p className="text-2xl">
                    {
                        returnValue
                    }
                </p>
            </div>
        </>
    );
}