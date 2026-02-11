import { Form, Link } from "react-router";
import { IoIosArrowBack } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { useEffect, useRef, useState } from "react";
import ButtonWrapper from "../components/ButtonWrapper";

type NumberInputProps = {
  id: number;
};

function NumberInput({ id }: NumberInputProps) {
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
    <div className="flex w-full items-center gap-2">
      <input
        ref={inputRef}
        id={`numberInput-${id}`}
        name={`numberInput-${id}`}
        type="number"
        min={-10000}
        max={10000}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
        className="w-35 rounded-sm bg-gray-50 px-2 py-1 text-2xl font-light text-lime-800 invalid:border-2 invalid:border-red-400 focus:outline-lime-700 xs:w-40"
      />

      {inputEmpty && (
        <div className="rounded-sm bg-red-400 px-2 py-1 text-sm/4.5 text-gray-950 xs:text-base">
          Can't be empty!
        </div>
      )}

      {inputOutOfRange && (
        <div className="rounded-sm bg-red-400 px-2 py-1 text-sm/4.5 text-gray-950 xs:text-base">
          Must be from -10,000 to 10,000.
        </div>
      )}
    </div>
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
      <main className="flex flex-col gap-3 items-start w-full max-w-215 mx-auto sm:gap-4">
        <Link
          to="/"
          className="flex items-center gap-1 text-lg text-lime-600"
        >
          <IoIosArrowBack />
          Home
        </Link>

        <div className="w-full rounded-md flex flex-col gap-3 bg-gray-800 p-4 xs:p-5 sm:px-8 sm:gap-5">
          <h1 className="text-2xl font-light text-lime-300">
            Add up to 10 numbers:
          </h1>

          <Form
            ref={formRef}
            onInput={() => {
              setFormValid(formRef.current?.checkValidity());
            }}
            action="/number-array/create"
            method="POST"
            className="flex flex-col gap-3"
          >
            {Array.from({ length: itemsLength }, (_, i) => (
              <div key={i} className="flex items-baseline gap-2">
                <span className="w-9 text-2xl font-light text-lime-300">
                  {i + 1}.
                </span>
                <NumberInput id={i + 1} />
              </div>
            ))}

            <div className="flex gap-1 sm:my-2">
                <CiCirclePlus
                onClick={addItem}
                className={`text-6xl ${itemsLength < 10 ? "bg-lime-950 text-lime-300" : "bg-gray-800 text-gray-400"} rounded-full`}
                />

                <CiCircleMinus
                onClick={removeItem}
                className={`text-6xl ${itemsLength > 1 ? "bg-lime-950 text-lime-300" : "bg-gray-800 text-gray-400"} rounded-full`}
                />
            </div>

            <div className="w-fit">
              <ButtonWrapper disabled={!formValid}>
                <input
                  type="submit"
                  value="Create array!"
                  disabled={!formValid}
                  className="sm:text-lg"
                />
              </ButtonWrapper>
            </div>
          </Form>
        </div>
      </main>
    </>
  );
}
