import { useState } from "react";
import ButtonWrapper from "../../ButtonWrapper";
import { useLoaderData, useRevalidator } from "react-router";
import MyArray from "../../MyArrayTable";

export default function Sort() {
  const myNumberArray = useLoaderData();
  const revalidator = useRevalidator();

  const [returnValue, setReturnValue] = useState<number[] | undefined>(
    undefined,
  );

  function handleSortAscending() {
    setReturnValue(myNumberArray.sort((a: number, b: number) => a - b));

    localStorage.setItem("myNumberArray", JSON.stringify(myNumberArray));

    revalidator.revalidate();
  }

  function handleSortDescending() {
    setReturnValue(myNumberArray.sort((a: number, b: number) => b - a));

    localStorage.setItem("myNumberArray", JSON.stringify(myNumberArray));

    revalidator.revalidate();
  }

  return (
    <>
      <title>myNumberArray | .sort() Method</title>
      <p>
        The <code>.sort()</code> array method takes a "compare function" to
        determine the sort order of the array. It sorts the array elements in
        place, meaning it modifies the original array, and it returns the
        newly-sorted reference to the original array.
        <br />
        <br />
        The compare function takes two parameters, let's say <code>
          a
        </code> and <code>b</code>, each representing an array item to compare.
        If the result of the compare function is a negative number,{" "}
        <code>a</code> is sorted before <code>b</code>. If the result of the
        compare function is a positive number, <code>a</code> is sorted after{" "}
        <code>b</code>. So, if your compare function looked like:{" "}
        <code className="rounded-sm bg-gray-950/75 px-2 py-1 text-nowrap">{`compareFn(a, b) => a - b`}</code>
        , and the two items for comparison were{" "}
        <code className="rounded-sm bg-gray-950/75 px-2 py-1 text-nowrap">{`[2, 1]`}</code>
        , 2 - 1 returns a positive number, meaning 2 would be sorted{" "}
        <i>after</i> 1, and the items would be reversed, sorted in ascending
        order.
        <br />
        <br />
        To sort the items in descending order, you could write a compare
        function like this:{" "}
        <code className="rounded-sm bg-gray-950/75 px-2 py-1 text-nowrap">{`compareFn(a, b) => b - a`}</code>
        .
      </p>

      <div className="my-2 rounded-sm bg-gray-950/75 p-2">
        Click a button to modify <code>myNumberArray</code> and see the return
        value!
        <button type='button' onClick={handleSortAscending} className="my-2 w-fit">
          <ButtonWrapper disabled={false}>
            <code>{`myNumberArray.sort((a, b) => a - b)`}</code>
          </ButtonWrapper>
        </button>
        <button type='button' onClick={handleSortDescending} className="my-2 w-fit">
          <ButtonWrapper disabled={false}>
            <code>{`myNumberArray.sort((a, b) => b - a)`}</code>
          </ButtonWrapper>
        </button>
      </div>

      {returnValue !== undefined && (
        <div className="overflow-x-scroll">
          <MyArray array={returnValue} />
        </div>
      )}
    </>
  );
}
