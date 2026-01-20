import { useState } from "react";
import ButtonWrapper from "../../ButtonWrapper";
import { useLoaderData, useRevalidator } from "react-router";

export default function Shift() {
    const myNumberArray = useLoaderData();
    const revalidator = useRevalidator();
    
    const [returnValue, setReturnValue] = useState<number | undefined>(undefined);

    function handleShift() {
        setReturnValue(myNumberArray.shift());
        
        localStorage.setItem("myNumberArray", JSON.stringify(myNumberArray));

        revalidator.revalidate();
    }
    
    return (
        <>
            <title>myNumberArray | .shift() Method</title>
            <p>
                The <code>.shift()</code> array method removes the first element from the array and returns that element. This method modifies the original array.
            </p>

            <div className="my-2 p-2 bg-gray-950/75 rounded-sm">
                Click the button to modify <code>myNumberArray</code> and see the return value!
                <div
                    onClick={handleShift}
                    className="w-fit my-2"
                >
                    <ButtonWrapper disabled={false}>
                        <code>myNumberArray.shift()</code>
                    </ButtonWrapper>
                </div>
            </div>

            {
                returnValue !== undefined &&
                <>
                <p className="mb-2">Returns:</p>
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