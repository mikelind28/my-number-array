import { useEffect, useRef, useState } from "react";
import ButtonWrapper from "../../ButtonWrapper";
import { useLoaderData, useRevalidator } from "react-router";

// TODO: add ability to increase number of parameters (see splice for example)
export default function Unshift() {
    const myNumberArray = useLoaderData();
    const revalidator = useRevalidator();
    
    const [inputValue, setInputValue] = useState("");
    const [inputEmpty, setInputEmpty] = useState<boolean | undefined>(true);
    const [inputOutOfRange, setInputOutOfRange] = useState<boolean | undefined>(false);
    const [inputValueValid, setInputValueValid] = useState<boolean>(false);
    
    const inputRef = useRef<HTMLInputElement>(null);

    const [returnValue, setReturnValue] = useState<number | undefined>(undefined);

    // detect if an input is empty or out of range to show an error message next to the input.
    useEffect(() => {
        setInputEmpty(inputRef.current?.validity.valueMissing);
        setInputOutOfRange(
            inputRef.current?.validity.rangeOverflow 
            || inputRef.current?.validity.rangeUnderflow
        );
    }, [inputValue]);

    function handleUnshift() {
        if (inputValue && inputValueValid) {
            setReturnValue(myNumberArray.unshift(parseInt(inputValue)));
            localStorage.setItem("myNumberArray", JSON.stringify(myNumberArray));
            revalidator.revalidate();
        }
    }
    
    return (
        <>
            <title>myNumberArray | .unshift() Method</title>
            <p>
                The <code>.unshift()</code> array method takes one or more values as parameters, which are added to the beginning of the array. This method modifies the original array and returns its new length.
            </p>

            <div className="flex flex-col gap-2 my-2 p-2 bg-gray-950/75 rounded-sm">
                <div className="flex flex-wrap gap-x-2">
                    Click the button to modify <code>myNumberArray</code> and see the return value!
                </div>

                <label htmlFor="push-method-value">Value to push:</label>

                <div className="flex items-center gap-2">
                    <input
                        ref={inputRef}
                        id="push-method-value"
                        name="push-method-value"
                        type="number" 
                        min={-10000}
                        max={10000}
                        step="1"
                        placeholder="value..."
                        value={inputValue}
                        required
                        onChange={(e) => {
                            setInputValueValid(e.target.checkValidity());
                            setInputValue(e.target.value);
                        }}
                        className="w-24 px-2 py-1 bg-gray-100 text-gray-950 rounded-xs placeholder:text-sm focus:outline-lime-700 invalid:border-2 invalid:border-red-500"
                    />

                    {
                        inputEmpty &&
                        <div className="px-2 py-1 text-base text-gray-950 bg-red-400 rounded-sm">
                            Can't be empty!
                        </div>
                    }

                    {
                        inputOutOfRange &&
                        <div className="px-2 py-1 text-base text-gray-950 leading-5 bg-red-400 rounded-sm">
                            Must be from -10,000 to 10,000.
                        </div>
                    }
                </div>
                <div
                    onClick={handleUnshift}
                    className="w-fit my-2"
                >
                    <ButtonWrapper disabled={!inputValueValid}>
                        <div className="flex flex-wrap">
                            <code>myNumberArray</code><code>.unshift(value)</code>
                        </div>
                    </ButtonWrapper>
                </div>
            </div>

            {
                returnValue !== undefined &&
                <>
                <p className="mb-2">Returns new length:</p>
                <div className="w-fit bg-lime-950 rounded-md px-2 py-1">
                    <p className="text-2xl">
                        {returnValue}
                    </p>
                </div>
                </>
            }
        </>
    );
}