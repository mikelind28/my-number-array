import { useState } from "react";
import { useLoaderData } from "react-router";

export default function At() {
    const myNumberArray = useLoaderData();
    const [inputValue, setInputValue] = useState("");
    const [inputValueValid, setInputValueValid] = useState<boolean>(true);

    return (
        <>
            <title>myNumberArray | .at() Method</title>
            <p>The <code>.at()</code> array method takes one parameter, <code>index</code>, and returns the item at that index.</p>

            <div className="flex flex-col gap-2 my-2 p-2 bg-gray-950/75 rounded-sm">
                <div className="flex flex-wrap gap-x-1 items-baseline leading-4">
                    <code>myNumberArray.at(</code>
                    <input
                        id="at-method-index"
                        type="number" 
                        min={myNumberArray.length * -1}
                        max={myNumberArray.length - 1}
                        step="1"
                        placeholder="index..."
                        value={inputValue}
                        required
                        onChange={(e) => {
                            setInputValueValid(e.target.checkValidity());
                            setInputValue(e.target.value);
                        }}
                        className="px-2 py-1 bg-gray-100 text-gray-950 w-21 rounded-xs placeholder:text-sm focus:outline-lime-700 invalid:border-2 invalid:border-red-500"
                    />
                    <code>)</code>
                </div>
            </div>

            <p>returns:</p>

            <div className="mt-2 w-fit bg-lime-950 rounded-md px-2 py-1">
                <p className="text-2xl">
                    {
                        !inputValueValid || inputValue == ""
                        ?
                        "undefined"
                        :
                        myNumberArray.at(parseInt(inputValue))
                    }
                </p>
            </div>
        </>
    );
}