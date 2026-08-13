import { useEffect, useRef, useState } from "react";
import ButtonWrapper from "../../ButtonWrapper";
import { useLoaderData, useRevalidator } from "react-router";
import ExampleWrapper from "../../ExampleWrapper";

// TODO: add ability to increase number of parameters (see splice for example)
export default function Push() {
  const myNumberArray = useLoaderData();
  const revalidator = useRevalidator();

  const [inputValue, setInputValue] = useState("");
  const [inputEmpty, setInputEmpty] = useState<boolean | undefined>(true);
  const [inputOutOfRange, setInputOutOfRange] = useState<boolean | undefined>(
    false,
  );
  const [inputValueValid, setInputValueValid] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const [returnValue, setReturnValue] = useState<number | undefined>(undefined);

  // detect if an input is empty or out of range to show an error message next to the input.
  useEffect(() => {
    setInputEmpty(inputRef.current?.validity.valueMissing);
    setInputOutOfRange(
      inputRef.current?.validity.rangeOverflow ||
        inputRef.current?.validity.rangeUnderflow,
    );
  }, [inputValue]);

  function handlePush() {
    if (inputValue && inputValueValid) {
      setReturnValue(myNumberArray.push(parseInt(inputValue)));
      localStorage.setItem("myNumberArray", JSON.stringify(myNumberArray));
      revalidator.revalidate();
    }
  }

  return (
    <>
      <title>myNumberArray | .push() Method</title>
      <p>
        The <code>.push()</code> array method takes one or more values as
        parameters, which are added to the end of the array. This method
        modifies the original array and returns its new length.
      </p>

      <ExampleWrapper>
        <div className="flex flex-wrap gap-x-2">
          Click the button to modify <code>myNumberArray</code> and see the
          return value!
        </div>

        <label htmlFor="push-method-value">Value to push:</label>

        <div className="flex items-center gap-2">
          <input
            ref={inputRef}
            id="push-method-value"
            name="push-method-value"
            type="number"
            min={-10000}
            max={10000}
            step="1"
            placeholder="value..."
            value={inputValue}
            required
            onChange={(e) => {
              setInputValueValid(e.target.checkValidity());
              setInputValue(e.target.value);
            }}
            className="w-24 rounded-xs bg-gray-100 px-2 py-1 text-gray-950 placeholder:text-sm invalid:border-2 invalid:border-rose-500 focus:outline-lime-700"
          />

          {inputEmpty && (
            <div className="rounded-sm bg-rose-400 px-2 py-1 text-base text-gray-950">
              Can't be empty!
            </div>
          )}

          {inputOutOfRange && (
            <div className="rounded-sm bg-rose-400 px-2 py-1 text-base leading-5 text-gray-950">
              Must be from -10,000 to 10,000.
            </div>
          )}
        </div>
        <button type="button" onClick={handlePush} className="my-2 w-fit">
          <ButtonWrapper style={!inputValueValid ? "disabled" : "normal"}>
            <div className="flex flex-wrap">
              <code>myNumberArray</code>
              <code>.push(value)</code>
            </div>
          </ButtonWrapper>
        </button>
      </ExampleWrapper>

      {returnValue !== undefined && (
        <>
          <p className="mb-2">Returns new length:</p>
          <div className="w-fit rounded-md bg-lime-950 px-2 py-1">
            <p className="text-2xl">{returnValue}</p>
          </div>
        </>
      )}
    </>
  );
}
