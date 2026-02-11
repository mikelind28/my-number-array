import { useState } from "react";
import { useLoaderData } from "react-router";

export default function Includes() {
  const myNumberArray = useLoaderData();
  const [inputValue, setInputValue] = useState("");
  const [inputValueValid, setInputValueValid] = useState<boolean>(true);

  return (
    <>
      <title>myNumberArray | .includes() Method</title>
      <p>
        The <code>.includes()</code> array method takes one parameter,{" "}
        <code>search</code>, and returns <code>true</code> if{" "}
        <code>search</code> is found in the array. Otherwise, it returns{" "}
        <code>false</code>.
      </p>

      <div className="my-2 flex flex-col gap-2 rounded-sm bg-gray-950/75 p-2">
        <div className="flex flex-wrap items-baseline gap-1 leading-6">
          <code>myNumberArray.includes(</code>
          <input
            id="includes-method-value"
            type="number"
            step="1"
            placeholder="search..."
            value={inputValue}
            required
            onChange={(e) => {
              setInputValueValid(e.target.checkValidity());
              setInputValue(e.target.value);
            }}
            className="w-24 rounded-xs bg-gray-100 px-2 py-1 text-gray-950 placeholder:text-sm invalid:border-2 invalid:border-red-500 focus:outline-lime-700"
          />
          <code>)</code>
        </div>
      </div>

      <p className="mb-2">returns:</p>
      <div className="w-fit rounded-md bg-lime-950 px-2 py-1">
        <p className="text-2xl">
          {!inputValueValid || inputValue === ""
            ? "undefined"
            : myNumberArray.includes(parseInt(inputValue)).toString()}
        </p>
      </div>
    </>
  );
}
