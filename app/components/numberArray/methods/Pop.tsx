import { useState } from "react";
import ButtonWrapper from "../../ButtonWrapper";
import { useLoaderData, useRevalidator } from "react-router";
import ExampleWrapper from "../../ExampleWrapper";

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

      <ExampleWrapper>
        <p>
          Click the button to modify <code>myNumberArray</code> and see the
          return value!
        </p>
        <button type="button" onClick={handlePop} className="my-2 w-fit">
          <ButtonWrapper style="normal">
            <code>myNumberArray.pop()</code>
          </ButtonWrapper>
        </button>
      </ExampleWrapper>

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
