import { useState } from "react";
import { useLoaderData } from "react-router";

export default function Includes() {
    const myNumberArray = useLoaderData();
    const [inputValue, setInputValue] = useState("");
    const [inputValueValid, setInputValueValid] = useState<boolean>(true);

    return (
        <>
            <title>myNumberArray | .includes() Method</title>
            <p>
                The <code>.includes()</code> array method takes one parameter, <code>search</code>, and returns <code>true</code> if <code>search</code> is found in the array. Otherwise, it returns <code>false</code>.
            </p>

            <div className="flex flex-col gap-2 my-2 p-2 bg-gray-950/75 rounded-sm">
                <div className="flex flex-wrap gap-1 items-baseline leading-6">
                    <code>myNumberArray.includes(</code>
                    <input
                        id="includes-method-value"
                        type="number" 
                        step="1"
                        placeholder="search..."
                        value={inputValue}
                        required
                        onChange={(e) => {
                            setInputValueValid(e.target.checkValidity());
                            setInputValue(e.target.value);
                        }}
                        className="px-2 py-1 bg-gray-100 text-gray-950 w-24 rounded-xs placeholder:text-sm focus:outline-lime-700 invalid:border-2 invalid:border-red-500"
                    />
                    <code>)</code>
                </div>
            </div>

            <p className="mb-2">returns:</p>
            <div className="w-fit bg-lime-950 rounded-md px-2 py-1">
                <p className="text-2xl">
                    {
                        !inputValueValid || inputValue === ""
                        ?
                        "undefined"
                        :
                        myNumberArray.includes(parseInt(inputValue)).toString()
                    }
                </p>
            </div>
        </>
    );
}