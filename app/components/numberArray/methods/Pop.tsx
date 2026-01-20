import { useState } from "react";
import ButtonWrapper from "../../ButtonWrapper";
import { useLoaderData, useRevalidator } from "react-router";

export default function Pop() {
    const myNumberArray = useLoaderData();
    const revalidator = useRevalidator();
    
    const [returnValue, setReturnValue] = useState<number | undefined>(undefined);

    function handlePop() {
        setReturnValue(myNumberArray.pop());
        
        localStorage.setItem("myNumberArray", JSON.stringify(myNumberArray));

        revalidator.revalidate();
    }
    
    return (
        <>
            <title>myNumberArray | .pop() Method</title>
            <p>
                The <code>.pop()</code> array method removes the last element from the array and returns that element. This method modifies the original array.
            </p>

            <div className="my-2 p-2 bg-gray-950/75 rounded-sm">
                Click the button to modify <code>myNumberArray</code> and see the return value!
                <div
                    onClick={handlePop}
                    className="w-fit my-2"
                >
                    <ButtonWrapper disabled={false}>
                        <code>myNumberArray.pop()</code>
                    </ButtonWrapper>
                </div>
            </div>

            {
                returnValue !== undefined &&
                <>
                <p className="mb-2">returns:</p>
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