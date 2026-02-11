import { useState } from "react";
import MyArray from "../../MyArrayTable";
import { useLoaderData, useRevalidator } from "react-router";
import ButtonWrapper from "../../ButtonWrapper";

export default function Fill() {
  const myNumberArray = useLoaderData();
  const revalidator = useRevalidator();

  const [valueInputValue, setValueInputValue] = useState("");
  const [startInputValue, setStartInputValue] = useState("");
  const [endInputValue, setEndInputValue] = useState<string | undefined>(
    undefined,
  );

  const [valueInputValueValid, setValueInputValueValid] =
    useState<boolean>(false);
  const [startInputValueValid, setStartInputValueValid] =
    useState<boolean>(false);
  const [endInputValueValid, setEndInputValueValid] = useState<boolean>(true);

  const [returnValue, setReturnValue] = useState<number[] | undefined>(
    undefined,
  );

  function handleFill() {
    if (
      valueInputValueValid &&
      startInputValueValid &&
      endInputValue == undefined
    ) {
      const returnValue = myNumberArray.fill(
        parseInt(valueInputValue),
        parseInt(startInputValue),
      );
      setReturnValue(returnValue);

      localStorage.setItem("myNumberArray", JSON.stringify(myNumberArray));

      revalidator.revalidate();
    } else if (
      valueInputValueValid &&
      startInputValueValid &&
      endInputValue != undefined &&
      endInputValueValid
    ) {
      const returnValue = myNumberArray.fill(
        parseInt(valueInputValue),
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
      <title>myNumberArray | .fill() Method</title>
      <p>
        The <code>.fill()</code> array method takes three parameters:{" "}
        <code>value</code>, <code>start</code>, and <code>end</code>. This
        method will replace each array item from the <code>start</code> to{" "}
        <code>end</code> indices with <code>value</code>. This method mutates
        the original array and returns it.
      </p>
      <p>
        The <code>start</code> and <code>end</code> parameters are optional—if
        omitted, all elements until the end of the array will be copied.
      </p>

      <div className="my-2 flex flex-col gap-2 rounded-sm bg-gray-950/75 p-3">
        <code>myNumberArray.fill(</code>
        <div className="flex items-baseline gap-x-1">
          <input
            id="fill-method-value"
            type="number"
            min={-10000}
            max={10000}
            step="1"
            placeholder="value..."
            value={valueInputValue}
            required
            onChange={(e) => {
              setValueInputValueValid(e.target.checkValidity());
              setValueInputValue(e.target.value);
            }}
            className="w-20 rounded-xs bg-gray-100 px-2 py-1 text-gray-950 placeholder:text-sm invalid:border-2 invalid:border-red-500 focus:outline-lime-700"
          />
          ,
        </div>

        <div className="flex items-baseline gap-x-1">
          <input
            id="fill-method-start"
            type="number"
            min={myNumberArray.length * -1}
            max={myNumberArray.length - 1}
            step="1"
            required
            placeholder="start..."
            value={startInputValue}
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
            id="fill-method-end"
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

        <div onClick={handleFill} className="my-2 w-fit">
          <ButtonWrapper
            disabled={
              !valueInputValueValid ||
              !startInputValueValid ||
              !endInputValueValid
            }
          >
            <p>Fill myNumberArray!</p>
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
