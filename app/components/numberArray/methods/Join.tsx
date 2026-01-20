import { useState } from "react";
import { useLoaderData } from "react-router";

export default function Join() {
    const myNumberArray = useLoaderData();
    const [inputValue, setInputValue] = useState<string>("");

    return (
        <>
            <title>myNumberArray | .join() Method</title>
            <p>The <code>.join()</code> joins all the elements of the array and returns them as a string. An optional parameter can be provided, which is used as a separator between the returned array items.</p>

            <div className="flex flex-col gap-2 my-2 p-2 bg-gray-950/75 rounded-sm">
                <div className="flex flex-wrap gap-1 items-baseline leading-6">
                    <code>myNumberArray.join(</code>
                    <input
                        id="join-method-separator"
                        type="string" 
                        placeholder="separator..."
                        value={inputValue}
                        onChange={(e) => {
                            setInputValue(e.target.value);
                        }}
                        className="px-2 py-1 bg-gray-100 text-gray-950 w-24 rounded-xs placeholder:text-sm focus:outline-lime-700 invalid:border-2 invalid:border-red-500"
                    />
                    <code>)</code>
                </div>
    
            </div>

            <p className="mb-2">returns:</p>
            <div className="w-fit max-w-full bg-lime-950 rounded-md px-2 py-1 overflow-x-scroll">
                <p className="text-2xl">
                    {
                        `"${myNumberArray.join(inputValue)}"`
                    }
                </p>
            </div>
        </>
    );
}