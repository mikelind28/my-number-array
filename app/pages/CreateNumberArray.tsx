import { Form } from "react-router";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { useEffect, useRef, useState } from "react";
import ButtonWrapper from "../components/ButtonWrapper";
import Breadcrumbs from "../components/Breadcrumbs";

type NumberInputProps = {
  number: number;
};

function TableRow({ number }: NumberInputProps) {
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
        className="min-w-12 bg-slate-900 px-2 py-1 text-2xl font-light text-lime-200"
      >
        {number}.
      </th>
      <td className="w-full max-w-40 min-w-34 sm:w-40">
        <input
          ref={inputRef}
          id={`row-${number}`}
          name={`row-${number}`}
          type="number"
          min={-10000}
          max={10000}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
          className="h-full w-full bg-slate-100 px-2 py-1 text-2xl font-light text-lime-800 invalid:border-2 invalid:border-rose-500 focus-visible:z-10 focus-visible:outline-lime-700"
        />
      </td>

      <td className="w-full max-w-40 sm:max-w-fit">
        {inputEmpty && (
          <td className="flex h-full w-full max-w-40 sm:w-40 items-center bg-rose-400 px-2 py-1 text-sm/4.5 text-gray-950">
            Can't be empty!
          </td>
        )}

        {inputOutOfRange && (
          <div className="flex h-full w-full items-center bg-rose-400 px-2 py-1 text-sm/4.5 text-gray-950 sm:w-60">
            Must be from -10,000 to 10,000.
          </div>
        )}
      </td>
    </tr>
  );
}

export default function CreateNumberArray() {
  const [itemsLength, setItemsLength] = useState(1);
  const [formValid, setFormValid] = useState<boolean | undefined>(false);

  const formRef = useRef<HTMLFormElement>(null);

  // if something in the form is not valid, don't allow submit.
  useEffect(() => {
    setFormValid(formRef.current?.checkValidity());
  }, [itemsLength]);

  // function to add another input element.
  function addItem() {
    setItemsLength((length) => Math.min(length + 1, 10));
  }

  // function to remove an input element.
  function removeItem() {
    setItemsLength((length) => Math.max(length - 1, 1));
  }

  return (
    <>
      <title>myNumberArray | Create New</title>
      <div className="bg-slate-950" style={{ gridArea: "body-left" }} />
      <main
        className="flex w-full min-w-0 flex-col items-start divide-y divide-white/25 bg-slate-950 "
        style={{ gridArea: "body" }}
      >
        <Breadcrumbs currentPage="Create new array" />

        <div className="flex w-full md:h-full md:border-b-0">
          <div className="flex w-full flex-col gap-6 py-7 bg-slate-900 md:border-r md:border-white/25 ">
            <h1 className="px-3 text-2xl font-light text-lime-300">
              Add up to 10 numbers:
            </h1>

            <Form
              ref={formRef}
              onInput={() => {
                setFormValid(formRef.current?.checkValidity());
              }}
              action="/number-array/create"
              method="POST"
              className=""
            >
              <table className="w-full sm:w-fit border-collapse border-spacing-px divide-y divide-white/25 border-y border-white/25 sm:border-r md:border-r-0 md:w-full">
                {Array.from({ length: itemsLength }, (_, i) => (
                  <TableRow number={i + 1} />
                ))}
              </table>

              <div className="flex gap-1 bg-slate-900 px-3 py-5">
                <button
                  type="button"
                  onClick={addItem}
                  disabled={itemsLength >= 10}
                >
                  <CiCirclePlus
                    className={`text-6xl ${itemsLength < 10 ? "cursor-pointer bg-lime-950 text-lime-300" : "bg-gray-800 text-gray-400"} rounded-full`}
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

              <div className="max-w-53 bg-slate-900 px-3">
                <ButtonWrapper style={!formValid ? "disabled" : "normal"}>
                  <input
                    type="submit"
                    value="Create array!"
                    disabled={!formValid}
                    className="text-xl"
                  />
                </ButtonWrapper>
              </div>
            </Form>
          </div>
          <div className="hidden size-full md:block" />
        </div>
        <div className="size-full sm:hidden" />
      </main>
      <div className="bg-slate-950" style={{ gridArea: "body-right" }} />
    </>
  );
}
