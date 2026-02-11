import { useState } from "react";
import MyArray from "../../MyArrayTable";
import { useLoaderData, useRevalidator } from "react-router";
import ButtonWrapper from "../../ButtonWrapper";

export default function CopyWithin() {
  const myNumberArray = useLoaderData();
  const revalidator = useRevalidator();

  const [targetInputValue, setTargetInputValue] = useState("");
  const [startInputValue, setStartInputValue] = useState("");
  const [endInputValue, setEndInputValue] = useState<string | undefined>(
    undefined,
  );

  const [targetInputValueValid, setTargetInputValueValid] =
    useState<boolean>(false);
  const [startInputValueValid, setStartInputValueValid] =
    useState<boolean>(false);
  const [endInputValueValid, setEndInputValueValid] = useState<boolean>(true);

  const [returnValue, setReturnValue] = useState<number[] | undefined>(
    undefined,
  );

  function handleCopyWithin() {
    if (
      targetInputValueValid &&
      startInputValueValid &&
      endInputValue == undefined
    ) {
      const returnValue = myNumberArray.copyWithin(
        parseInt(targetInputValue),
        parseInt(startInputValue),
      );
      setReturnValue(returnValue);

      localStorage.setItem("myNumberArray", JSON.stringify(myNumberArray));

      revalidator.revalidate();
    } else if (
      targetInputValueValid &&
      startInputValueValid &&
      endInputValue != undefined &&
      endInputValueValid
    ) {
      const returnValue = myNumberArray.copyWithin(
        parseInt(targetInputValue),
        parseInt(startInputValue),
        parseInt(endInputValue),
      );
      setReturnValue(returnValue);

      localStorage.setItem("myNumberArray", JSON.stringify(myNumberArray));

      revalidator.revalidate();
    }
  }

  return (
    <>
      <title>myNumberArray | .copyWithin() Method</title>
      <p>
        The <code>.copyWithin()</code> array method takes three parameters:{" "}
        <code>target</code>, <code>start</code>, and <code>end</code>. Each is
        an integer that represents an index in the array. The{" "}
        <code>.copyWithin()</code> method copies the items from{" "}
        <code>start</code> up to (but not including) <code>end</code>, copies
        them to the <code>target</code> index, replacing the existing items. It
        modifies the original array and returns it.
      </p>
      <br />
      <p>
        The <code>end</code> parameter is optional—if omitted, all elements
        until the end of the array will be copied.
      </p>

      <div className="my-2 flex flex-col gap-2 rounded-sm bg-gray-950/75 p-3">
        <code>myNumberArray.copyWithin(</code>
        <div className="flex items-baseline gap-x-1">
          <input
            id="copy-within-method-target"
            type="number"
            min={myNumberArray.length * -1}
            max={myNumberArray.length - 1}
            step="1"
            placeholder="target..."
            value={targetInputValue}
            required
            onChange={(e) => {
              setTargetInputValueValid(e.target.checkValidity());
              setTargetInputValue(e.target.value);
            }}
            className="w-20 rounded-xs bg-gray-100 px-2 py-1 text-gray-950 placeholder:text-sm invalid:border-2 invalid:border-red-500 focus:outline-lime-700"
          />
          ,
        </div>

        <div className="flex items-baseline gap-x-1">
          <input
            id="copy-within-method-start"
            type="number"
            min={myNumberArray.length * -1}
            max={myNumberArray.length - 1}
            step="1"
            placeholder="start..."
            value={startInputValue}
            required
            onChange={(e) => {
              setStartInputValueValid(e.target.checkValidity());
              setStartInputValue(e.target.value);
            }}
            className="w-20 rounded-xs bg-gray-100 px-2 py-1 text-gray-950 placeholder:text-sm invalid:border-2 invalid:border-red-500 focus:outline-lime-700"
          />
          ,
        </div>

        <div className="flex items-baseline gap-x-1">
          <input
            id="copy-within-method-end"
            type="number"
            min={myNumberArray.length * -1}
            max={myNumberArray.length - 1}
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
            className="w-20 rounded-xs bg-gray-100 px-2 py-1 text-gray-950 placeholder:text-sm invalid:border-2 invalid:border-red-500 focus:outline-lime-700"
          />
          ,
        </div>
        <code>)</code>

        <div onClick={handleCopyWithin} className="my-2 w-fit">
          <ButtonWrapper
            disabled={
              !targetInputValueValid ||
              !startInputValueValid ||
              !endInputValueValid
            }
          >
            <p>Copy Within myNumberArray!</p>
          </ButtonWrapper>
        </div>
      </div>

      {returnValue && (
        <>
          <div className="mb-2">returns:</div>

          <div className="overflow-x-scroll">
            <MyArray array={returnValue} />
          </div>
        </>
      )}
    </>
  );
}
