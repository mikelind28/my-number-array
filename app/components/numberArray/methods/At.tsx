import { useState } from "react";
import { useLoaderData } from "react-router";

export default function At() {
  const myNumberArray = useLoaderData();
  const [inputValue, setInputValue] = useState("");
  const [inputValueValid, setInputValueValid] = useState<boolean>(true);

  return (
    <>
      <title>myNumberArray | .at() Method</title>
      <p>
        The <code>.at()</code> array method takes one parameter,{" "}
        <code>index</code>, and returns the item at that index.
      </p>

      <div className="my-2 flex flex-col gap-2 rounded-sm bg-gray-950/75 p-2">
        <div className="flex flex-wrap items-baseline gap-x-1 leading-4">
          <code>myNumberArray.at(</code>
          <input
            id="at-method-index"
            type="number"
            min={myNumberArray.length * -1}
            max={myNumberArray.length - 1}
            step="1"
            placeholder="index..."
            value={inputValue}
            required
            onChange={(e) => {
              setInputValueValid(e.target.checkValidity());
              setInputValue(e.target.value);
            }}
            className="w-21 rounded-xs bg-gray-100 px-2 py-1 text-gray-950 placeholder:text-sm invalid:border-2 invalid:border-red-500 focus:outline-lime-700"
          />
          <code>)</code>
        </div>
      </div>

      <p>returns:</p>

      <div className="mt-2 w-fit rounded-md bg-lime-950 px-2 py-1">
        <p className="text-2xl">
          {!inputValueValid || inputValue == ""
            ? "undefined"
            : myNumberArray.at(parseInt(inputValue))}
        </p>
      </div>
    </>
  );
}
