import { useState, useEffect } from "react";
import MyArray from "../../MyArrayTable";
import { useLoaderData } from "react-router";

export default function Filter() {
  const myNumberArray = useLoaderData();
  const [inputValue, setInputValue] = useState("");
  const [inputValueValid, setInputValueValid] = useState<boolean>(false);
  const [selectValue, setSelectValue] = useState<string>("<");
  const [arrayToReturn, setArrayToReturn] = useState<number[]>([]);

  useEffect(() => {
    if (myNumberArray.length === 0) {
      setArrayToReturn([]);
      return;
    }
    if (selectValue === "<") {
      const arrayToReturn = myNumberArray.filter(
        (value: number) => value < parseInt(inputValue),
      );
      setArrayToReturn(arrayToReturn);
    }
    if (selectValue === "<=") {
      const arrayToReturn = myNumberArray.filter(
        (value: number) => value <= parseInt(inputValue),
      );
      setArrayToReturn(arrayToReturn);
    }
    if (selectValue === ">") {
      const arrayToReturn = myNumberArray.filter(
        (value: number) => value > parseInt(inputValue),
      );
      setArrayToReturn(arrayToReturn);
    }
    if (selectValue === ">=") {
      const arrayToReturn = myNumberArray.filter(
        (value: number) => value >= parseInt(inputValue),
      );
      setArrayToReturn(arrayToReturn);
    }
    if (selectValue === "=") {
      const arrayToReturn = myNumberArray.filter(
        (value: number) => value === parseInt(inputValue),
      );
      setArrayToReturn(arrayToReturn);
    }
  }, [selectValue, inputValue, myNumberArray]);

  return (
    <>
      <title>myNumberArray | .filter() Method</title>
      <p>
        The <code>.filter()</code> array method takes a test function as a
        parameter. It returns a shallow copy of the array containing only the
        elements that pass the test.
      </p>

      <div className="my-2 flex flex-col gap-2 rounded-sm bg-gray-950/75 p-2">
        <div className="flex flex-wrap items-baseline leading-6">
          <code>myNumberArray.filter(</code>
          <code>(value){` => {`}</code>
        </div>
        <div className="ml-4 flex flex-wrap items-baseline gap-1 leading-5">
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
        <code>{`})`}</code>
      </div>

      <p className="mb-2">returns:</p>

      {!inputValueValid && (
        <div className="w-fit rounded-md bg-lime-950 px-2 py-1">
          <p className="text-2xl">undefined</p>
        </div>
      )}
      {inputValueValid && (
        <div className="w-full overflow-x-scroll">
          <MyArray array={arrayToReturn} />
        </div>
      )}
    </>
  );
}
