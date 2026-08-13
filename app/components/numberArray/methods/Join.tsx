import { useState } from "react";
import { useLoaderData } from "react-router";
import ExampleWrapper from "../../ExampleWrapper";

export default function Join() {
  const myNumberArray = useLoaderData();
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <>
      <title>myNumberArray | .join() Method</title>
      <p>
        The <code>.join()</code> joins all the elements of the array and returns
        them as a string. An optional parameter can be provided, which is used
        as a separator between the returned array items.
      </p>

      <ExampleWrapper>
        <div className="flex flex-wrap items-baseline gap-1 leading-6">
          <code>myNumberArray.join(</code>
          <input
            id="join-method-separator"
            type="string"
            placeholder="separator..."
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            className="w-24 rounded-xs bg-gray-100 px-2 py-1 text-gray-950 placeholder:text-sm invalid:border-2 invalid:border-rose-500 focus:outline-lime-700"
          />
          <code>)</code>
        </div>
      </ExampleWrapper>

      <p className="mb-2">returns:</p>
      <div className="w-fit max-w-full overflow-x-scroll rounded-md bg-lime-950 px-2 py-1">
        <p className="text-2xl">{`"${myNumberArray.join(inputValue)}"`}</p>
      </div>
    </>
  );
}
