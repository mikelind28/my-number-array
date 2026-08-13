import { useEffect, useRef, useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import ButtonWrapper from "../../ButtonWrapper";
import MyArray from "../../MyArrayTable";
import { useLoaderData } from "react-router";
import ExampleWrapper from "../../ExampleWrapper";

type CreateNumberArray2Type = {
  setMyNumberArray2: React.Dispatch<React.SetStateAction<number[]>>;
};

function TableRow({ number }: { number: number }) {
  const [input, setInput] = useState("");
  const [inputEmpty, setInputEmpty] = useState<boolean | undefined>(true);
  const [inputOutOfRange, setInputOutOfRange] = useState<boolean | undefined>(
    false,
  );

  const inputRef = useRef<HTMLInputElement>(null);

  // detect if an input is empty or out of range to show an error message next to the input.
  useEffect(() => {
    setInputEmpty(inputRef.current?.validity.valueMissing);
    setInputOutOfRange(
      inputRef.current?.validity.rangeOverflow ||
        inputRef.current?.validity.rangeUnderflow,
    );
  }, [input]);

  // when a new input is added, automatically focus it.
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <tr className="flex w-full divide-x divide-white/25 bg-slate-900">
      <th
        scope="row"
        className="min-w-10 bg-slate-900 px-2 py-1 text-xl font-light text-lime-200"
      >
        {number}.
      </th>
      <td className="w-full max-w-40 min-w-20">
        <input
          ref={inputRef}
          id={`numberInputConcat-${number}`}
          name={`numberInputConcat-${number}`}
          type="number"
          min={-10000}
          max={10000}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
          className="h-full w-full bg-slate-100 px-2 py-1 text-xl font-light text-lime-800 invalid:border-2 invalid:border-rose-500 focus-visible:z-10 focus-visible:outline-lime-700"
        />
      </td>

      <td className="w-full max-w-40">
        {inputEmpty && (
          <div className="flex h-full w-full items-center bg-rose-400 px-2 py-1 text-xs/4.5 text-gray-950">
            Can't be empty!
          </div>
        )}

        {inputOutOfRange && (
          <div className="flex h-full w-full items-center bg-rose-400 px-2 py-1 text-xs/4.5 text-gray-950">
            Must be from -10,000 to 10,000.
          </div>
        )}
      </td>
    </tr>
  );
}

function CreateNumberArray2({ setMyNumberArray2 }: CreateNumberArray2Type) {
  const [itemsLength, setItemsLength] = useState(1);

  const [formValid, setFormValid] = useState<boolean | undefined>(false);

  const formRef = useRef<HTMLFormElement>(null);

  // function to add another input element.
  function addItem() {
    setItemsLength((length) => Math.min(length + 1, 5));
  }

  // function to remove an input element.
  function removeItem() {
    setItemsLength((length) => Math.max(length - 1, 1));
  }

  function handleSubmit() {
    const formData = new FormData(formRef.current!);
    const valuesArray = Array.from(formData.values()).map(Number);
    setMyNumberArray2(valuesArray);
  }

  return (
    <>
      <p className="text-lg leading-6 font-light text-lime-300">
        Add up to 5 numbers to create <code>myNumberArray2:</code>
      </p>

      <form
        ref={formRef}
        onInput={() => {
          setFormValid(formRef.current?.checkValidity());
        }}
      >
        <table className="w-full border-collapse border-spacing-px divide-y divide-white/25 border border-white/25">
          {Array.from({ length: itemsLength }, (_, i) => (
            <TableRow key={i + 1} number={i + 1} />
          ))}
        </table>

        <div className="mt-2 mb-4 flex gap-2">
          <button type="button" onClick={addItem} disabled={itemsLength >= 5}>
            <CiCirclePlus
              className={`text-6xl ${itemsLength < 5 ? "cursor-pointer bg-lime-950 text-lime-300" : "bg-gray-800 text-gray-400"} rounded-full`}
            />
          </button>

          <button
            type="button"
            onClick={removeItem}
            disabled={itemsLength <= 0}
          >
            <CiCircleMinus
              className={`text-6xl ${itemsLength > 1 ? "cursor-pointer bg-lime-950 text-lime-300" : "bg-gray-800 text-gray-400"} rounded-full`}
            />
          </button>
        </div>

        <div className="mt-4 w-fit">
          <ButtonWrapper style={!formValid ? "disabled" : "normal"}>
            <input
              type="button"
              value="Concat them!"
              disabled={!formValid}
              onClick={handleSubmit}
              className={formValid ? "cursor-pointer" : "cursor-default"}
            />
          </ButtonWrapper>
        </div>
      </form>
    </>
  );
}

export default function Concat() {
  const myNumberArray = useLoaderData();
  const [myNumberArray2, setMyNumberArray2] = useState<number[]>([]);

  return (
    <>
      <title>myNumberArray | .concat() Method</title>
      <p>
        The <code>.concat()</code> array method merges two or more arrays, and
        returns the newly-merged array without modifying the original.
      </p>

      <ExampleWrapper>
        <CreateNumberArray2 setMyNumberArray2={setMyNumberArray2} />
      </ExampleWrapper>
      {myNumberArray2.length > 0 ? (
        <div className="flex flex-col">
          <div className="mb-3 flex flex-wrap items-baseline gap-x-1 leading-6">
            <p className="flex flex-wrap">
              <code>myNumberArray.</code>
              <code>concat(myNumberArray2)</code>
            </p>
            returns:
          </div>
          <div className="w-full overflow-x-scroll">
            <MyArray array={myNumberArray.concat(myNumberArray2)} />
          </div>
        </div>
      ) : null}
    </>
  );
}
