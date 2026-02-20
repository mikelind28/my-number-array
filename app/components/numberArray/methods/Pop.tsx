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
        The <code>.pop()</code> array method removes the last element from the
        array and returns that element. This method modifies the original array.
      </p>

      <div className="my-2 rounded-sm bg-gray-950/75 p-2">
        Click the button to modify <code>myNumberArray</code> and see the return
        value!
        <button type='button' onClick={handlePop} className="my-2 w-fit">
          <ButtonWrapper disabled={false}>
            <code>myNumberArray.pop()</code>
          </ButtonWrapper>
        </button>
      </div>

      {returnValue !== undefined && (
        <>
          <p className="mb-2">returns:</p>
          <div className="w-fit rounded-md bg-lime-950 px-2 py-1">
            <p className="text-2xl">{returnValue}</p>
          </div>
        </>
      )}
    </>
  );
}
