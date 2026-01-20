import { useState } from "react";
import { useLoaderData } from "react-router";
import MyArray from "../../MyArray";

export default function Slice() {
    const myNumberArray = useLoaderData();

    const [startInputValue, setStartInputValue] = useState("");
    const [endInputValue, setEndInputValue] = useState<string | undefined>(undefined);

    const [startInputValueValid, setStartInputValueValid] = useState<boolean>(false);
    const [endInputValueValid, setEndInputValueValid] = useState<boolean>(true);

    return (
        <>
            <title>myNumberArray | .slice() Method</title>
            <p>The <code>.slice()</code> array method takes two parameters: <code>start</code> and <code>end</code>, each an integer representing an index in the array. The <code>.slice()</code> method returns a shallow copy of the array from <code>start</code> to <code>end</code> (<code>end</code> not included).</p>
            <br/>
            <p>The <code>end</code> parameter is optional—if omitted, all elements until the end of the array will be copied.</p>

            <div className="flex flex-col gap-2 my-2 p-3 bg-gray-950/75 rounded-sm">
                <code>myNumberArray.slice(</code>

                <div className="flex gap-x-1 items-baseline">
                    <input
                        id="slice-method-start"
                        type="number" 
                        min={myNumberArray.length * -1}
                        max={myNumberArray.length}
                        step="1"
                        placeholder="start..."
                        value={startInputValue}
                        required
                        onChange={(e) => {
                            setStartInputValueValid(e.target.checkValidity());
                            setStartInputValue(e.target.value);
                        }}
                        className="px-2 py-1 bg-gray-100 text-gray-950 w-20 rounded-xs placeholder:text-sm focus:outline-lime-700 invalid:border-2 invalid:border-red-500"
                    />,
                </div>

                <div className="flex gap-x-1 items-baseline">
                    <input
                        id="slice-method-end"
                        type="number" 
                        min={myNumberArray.length * -1}
                        step="1"
                        placeholder="end..."
                        value={endInputValue}
                        onChange={(e) => {
                            setEndInputValueValid(e.target.checkValidity());
                            if (e.target.value) {
                                setEndInputValue(e.target.value);
                            } else {
                                setEndInputValue(undefined);
                            }
                        }}
                        className="px-2 py-1 bg-gray-100 text-gray-950 w-20 rounded-xs placeholder:text-sm focus:outline-lime-700 invalid:border-2 invalid:border-red-500"
                    />,
                </div>

                <div className="flex gap-x-1">
                    <code>)</code>
                </div>
                
            </div>

            <p className="mb-2">returns:</p>
            {
                !startInputValueValid || !endInputValueValid
                ?
                <div className="bg-lime-950 rounded-md px-2 py-1">
                    <p className="text-2xl">undefined</p>
                </div>
                :
                startInputValue !== undefined &&
                endInputValue !== undefined
                ?
                <div className="overflow-x-scroll">
                    <MyArray array=
                    {[...myNumberArray].slice(parseInt(startInputValue), parseInt(endInputValue))} />
                </div>
                :
                startInputValue !== undefined &&
                endInputValue == undefined
                ?
                <div className="overflow-x-scroll">
                    <MyArray array=
                    {[...myNumberArray].slice( parseInt(startInputValue))} />
                </div>
                :
                <div className="bg-lime-950 rounded-md px-2 py-1">
                    <p className="text-2xl">undefined</p>
                </div>
            }
        </>
    );
}