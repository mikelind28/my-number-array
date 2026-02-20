import { useState } from "react";
import ButtonWrapper from "../../ButtonWrapper";
import { useLoaderData, useRevalidator } from "react-router";
import MyArray from "../../MyArrayTable";

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

      <div className="my-2 rounded-sm bg-gray-950/75 p-2">
        Click the button to reverse <code>myNumberArray</code> and see the
        return value!
        <button type='button' onClick={handleReverse} className="my-2 w-fit">
          <ButtonWrapper disabled={false}>
            <code>myNumberArray.reverse()</code>
          </ButtonWrapper>
        </button>
      </div>

      {returnValue !== undefined && (
        <div className="w-full overflow-x-scroll">
          <MyArray array={returnValue} />
        </div>
      )}
    </>
  );
}
