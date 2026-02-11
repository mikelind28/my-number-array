import { useState } from "react";
import MyArray from "../../MyArrayTable";
import { useLoaderData } from "react-router";

export default function With() {
  const myNumberArray = useLoaderData();

  const [indexInputValue, setIndexInputValue] = useState("");
  const [valueInputValue, setValueInputValue] = useState("");

  const [indexInputValueValid, setIndexInputValueValid] =
    useState<boolean>(false);
  const [valueInputValueValid, setValueInputValueValid] =
    useState<boolean>(false);

  return (
    <>
      <title>myNumberArray | .with() Method</title>
      <p>
        The <code>.with()</code> array method takes two parameters:{" "}
        <code>index</code> and <code>value</code>. This method will return a new
        array in which the item at the specified <code>index</code> is replaced
        with the specified <code>value</code>.
      </p>

      <div className="my-2 flex flex-col gap-2 rounded-sm bg-gray-950/75 p-3">
        <code>myNumberArray.with(</code>
        <div className="flex items-baseline gap-x-1">
          <input
            id="with-method-index"
            type="number"
            min={myNumberArray.length * -1}
            max={myNumberArray.length - 1}
            step="1"
            placeholder="index..."
            value={indexInputValue}
            required
            onChange={(e) => {
              setIndexInputValueValid(e.target.checkValidity());
              setIndexInputValue(e.target.value);
            }}
            className="w-20 rounded-xs bg-gray-100 px-2 py-1 text-gray-950 placeholder:text-sm invalid:border-2 invalid:border-red-500 focus:outline-lime-700"
          />
          ,
        </div>

        <div className="flex items-baseline gap-x-1">
          <input
            id="with-method-value"
            type="number"
            min={-10000}
            max={10000}
            step="1"
            required
            placeholder="value..."
            value={valueInputValue}
            onChange={(e) => {
              setValueInputValueValid(e.target.checkValidity());
              setValueInputValue(e.target.value);
            }}
            className="w-20 rounded-xs bg-gray-100 px-2 py-1 text-gray-950 placeholder:text-sm invalid:border-2 invalid:border-red-500 focus:outline-lime-700"
          />
          ,
        </div>
        <code>)</code>
      </div>

      <p className="mb-2">returns:</p>

      {!indexInputValueValid || !valueInputValueValid ? (
        <div className="rounded-md bg-lime-950 px-2 py-1">
          <p className="text-2xl">undefined</p>
        </div>
      ) : (
        <div className="overflow-x-scroll">
          <MyArray
            array={myNumberArray.with(
              parseInt(indexInputValue),
              parseInt(valueInputValue),
            )}
          />
        </div>
      )}
    </>
  );
}
