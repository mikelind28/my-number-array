import { useState } from "react";
import ButtonWrapper from "../../ButtonWrapper";
import { useLoaderData, useRevalidator } from "react-router";
import ExampleWrapper from "../../ExampleWrapper";

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
        The <code>.shift()</code> array method removes the first element from
        the array and returns that element. This method modifies the original
        array.
      </p>

      <ExampleWrapper>
        <p>Click the button to modify <code>myNumberArray</code> and see the return
        value!</p>
        <button type='button' onClick={handleShift} className="my-2 w-fit">
          <ButtonWrapper style='normal'>
            <code>myNumberArray.shift()</code>
          </ButtonWrapper>
        </button>
      </ExampleWrapper>

      {returnValue !== undefined && (
        <>
          <p className="mb-2">Returns:</p>
          <div className="w-fit rounded-md bg-lime-950 px-2 py-1">
            <p className="text-2xl">{returnValue}</p>
          </div>
        </>
      )}
    </>
  );
}
