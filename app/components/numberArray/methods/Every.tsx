import { useState, useEffect } from "react";
import { useLoaderData } from "react-router";

export default function Every() {
  const myNumberArray = useLoaderData();
  const [inputValue, setInputValue] = useState("");
  const [inputValueValid, setInputValueValid] = useState<boolean>(false);
  const [selectValue, setSelectValue] = useState<string>("<");
  const [returnValue, setReturnValue] = useState(false);

  useEffect(() => {
    if (myNumberArray.length === 0) {
      setReturnValue(false);
      return;
    }
    if (selectValue === "<") {
      const result = myNumberArray.every(
        (value: number) => value < parseInt(inputValue),
      );
      setReturnValue(result);
    }
    if (selectValue === "<=") {
      const result = myNumberArray.every(
        (value: number) => value <= parseInt(inputValue),
      );
      setReturnValue(result);
    }
    if (selectValue === ">") {
      const result = myNumberArray.every(
        (value: number) => value > parseInt(inputValue),
      );
      setReturnValue(result);
    }
    if (selectValue === ">=") {
      const result = myNumberArray.every(
        (value: number) => value >= parseInt(inputValue),
      );
      setReturnValue(result);
    }
    if (selectValue === "=") {
      const result = myNumberArray.every(
        (value: number) => value === parseInt(inputValue),
      );
      setReturnValue(result);
    }
  }, [selectValue, inputValue, myNumberArray]);

  return (
    <>
      <title>myNumberArray | .every() Method</title>
      <p>
        The <code>.every()</code> array method takes a test function as a
        parameter. If every value in the array satisfies the test function, the{" "}
        <code>.every()</code> method will return <code>true</code>. If any one
        value does not satisfy the test condition, it will return{" "}
        <code>false</code>.
      </p>

      <div className="my-2 flex flex-col gap-2 rounded-sm bg-gray-950/75 p-2">
        <div className="flex flex-wrap items-baseline leading-6">
          <code>myNumberArray.every(</code>
          <code>(value){` => {`}</code>
        </div>
        <div className="flex flex-wrap items-baseline gap-1 leading-5">
          <code>value</code>
          <select
            id="every-method-operator"
            onChange={(e) => {
              setSelectValue(e.target.value);
            }}
            className="rounded-sm border border-lime-950 bg-gray-700 p-1"
          >
            <option value="<">{`<`}</option>
            <option value="<=">{`<=`}</option>
            <option value=">">{`>`}</option>
            <option value=">=">{`>=`}</option>
            <option value="=">{`=`}</option>
          </select>

          <input
            id="every-method-input"
            type="number"
            value={inputValue}
            required
            onChange={(e) => {
              setInputValueValid(e.target.checkValidity());
              setInputValue(e.target.value);
            }}
            className="w-16 rounded-xs bg-gray-100 px-2 py-1 text-gray-950 placeholder:text-sm invalid:border-2 invalid:border-red-500 focus:outline-lime-700"
          />
        </div>
      </div>

      <p className="mb-2">returns:</p>
      <div className="w-fit rounded-md bg-lime-950 px-2 py-1">
        <p className="text-2xl">
          {!inputValueValid ? "undefined" : returnValue.toString()}
        </p>
      </div>
    </>
  );
}
