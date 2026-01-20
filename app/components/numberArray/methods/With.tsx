import { useState } from "react";
import MyArray from "../../MyArray";
import { useLoaderData } from "react-router";

export default function With() {
    const myNumberArray = useLoaderData();

    const [indexInputValue, setIndexInputValue] = useState("");
    const [valueInputValue, setValueInputValue] = useState("");

    const [indexInputValueValid, setIndexInputValueValid] = useState<boolean>(false);
    const [valueInputValueValid, setValueInputValueValid] = useState<boolean>(false);

    return (
        <>
            <title>myNumberArray | .with() Method</title>
            <p>The <code>.with()</code> array method takes two parameters: <code>index</code> and <code>value</code>. This method will return a new array in which the item at the specified <code>index</code> is replaced with the specified <code>value</code>.</p>

            <div className="flex flex-col gap-2 my-2 p-3 bg-gray-950/75 rounded-sm">
                <code>myNumberArray.with(</code>
                <div className="flex gap-x-1 items-baseline">
                    <input
                        id="with-method-index"
                        type="number"
                        min={myNumberArray.length * -1}
                        max={myNumberArray.length - 1}
                        step="1"
                        placeholder="index..."
                        value={indexInputValue}
                        required
                        onChange={(e) => {
                            setIndexInputValueValid(e.target.checkValidity());
                            setIndexInputValue(e.target.value);
                        }}
                        className="px-2 py-1 bg-gray-100 text-gray-950 w-20 rounded-xs placeholder:text-sm focus:outline-lime-700 invalid:border-2 invalid:border-red-500"
                    />,
                </div>

                <div className="flex gap-x-1 items-baseline">
                    <input
                        id="with-method-value"
                        type="number" 
                        min={-10000}
                        max={10000}
                        step="1"
                        required
                        placeholder="value..."
                        value={valueInputValue}
                        onChange={(e) => {
                            setValueInputValueValid(e.target.checkValidity());
                            setValueInputValue(e.target.value);
                        }}
                        className="px-2 py-1 bg-gray-100 text-gray-950 w-20 rounded-xs placeholder:text-sm focus:outline-lime-700 invalid:border-2 invalid:border-red-500"
                    />,
                </div>
                <code>)</code>

            </div>

            <p className="mb-2">
                returns:
            </p>

            {
                !indexInputValueValid || !valueInputValueValid
                ?
                <div className="bg-lime-950 rounded-md px-2 py-1">
                    <p className="text-2xl">undefined</p>
                </div>
                :
                <div className="overflow-x-scroll">
                    <MyArray array=
                    {myNumberArray.with(parseInt(indexInputValue), parseInt(valueInputValue))} />
                </div>
            }
        </>        
    );
}