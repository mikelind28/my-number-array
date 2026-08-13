import { useState } from "react";
import ButtonWrapper from "../../ButtonWrapper";
import { useLoaderData, useRevalidator } from "react-router";
import MyArray from "../../MyArrayTable";
import ExampleWrapper from "../../ExampleWrapper";

export default function Reverse() {
  const myNumberArray = useLoaderData();
  const revalidator = useRevalidator();

  const [returnValue, setReturnValue] = useState<number[] | undefined>(
    undefined,
  );

  function handleReverse() {
    setReturnValue(myNumberArray.reverse());

    localStorage.setItem("myNumberArray", JSON.stringify(myNumberArray));

    revalidator.revalidate();
  }

  return (
    <>
      <title>myNumberArray | .reverse() Method</title>
      <p>
        The <code>.reverse()</code> array method reverses the original array in
        place, modifying the original array. This method returns a reference to
        the now-reversed original array.
      </p>

      <ExampleWrapper>
        <p>
          Click the button to reverse <code>myNumberArray</code> and see the
          return value!
        </p>
        <button type="button" onClick={handleReverse} className="my-2 w-fit">
          <ButtonWrapper style="normal">
            <code>myNumberArray.reverse()</code>
          </ButtonWrapper>
        </button>
      </ExampleWrapper>

      {returnValue !== undefined && (
        <div className="w-full overflow-x-scroll">
          <MyArray array={returnValue} />
        </div>
      )}
    </>
  );
}
