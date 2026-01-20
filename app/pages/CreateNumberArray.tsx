import { Form, Link } from "react-router";
import { IoIosArrowBack } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { useEffect, useRef, useState } from "react";
import ButtonWrapper from "../components/ButtonWrapper";

type NumberInputProps = {
    id: number;
}

function NumberInput({ id }: NumberInputProps) {
    const [input, setInput] = useState('');
    const [inputEmpty, setInputEmpty] = useState<boolean | undefined>(true);
    const [inputOutOfRange, setInputOutOfRange] = useState<boolean | undefined>(false);

    const inputRef = useRef<HTMLInputElement>(null);

    // detect if an input is empty or out of range to show an error message next to the input.
    useEffect(() => {
        setInputEmpty(inputRef.current?.validity.valueMissing);
        setInputOutOfRange(
            inputRef.current?.validity.rangeOverflow 
            || inputRef.current?.validity.rangeUnderflow
        );
    }, [input]);

    // when a new input is added, automatically focus it.
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <div className="w-full flex items-center gap-2">
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
                className="w-35 px-2 py-1 bg-gray-50 text-2xl text-lime-800 font-light rounded-sm focus:outline-lime-700 invalid:border-2 invalid:border-red-400"
            />

            {
                inputEmpty &&
                <div className="px-2 py-1 text-base text-gray-950 bg-red-400 rounded-sm">
                    Can't be empty!
                </div>
            }

            {
                inputOutOfRange &&
                <div className="px-2 py-1 text-base text-gray-950 leading-5 bg-red-400 rounded-sm">
                    Must be from -10,000 to 10,000.
                </div>
            }
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
        <div className="px-4 py-2 flex flex-col items-center">
            <title>myNumberArray | Create New</title>
            <div className="flex flex-col items-start">
                <Link 
                    to="/"
                    className="flex items-center gap-1 mb-2 text-lime-600 text-lg"
                >
                    <IoIosArrowBack />
                    Home
                </Link>

                <div className="w-90 p-4 rounded-md bg-gray-800">
                    <h1 className="text-2xl text-lime-300 font-light">Add up to 10 numbers:</h1>

                    <div className="mt-2 mb-4 flex gap-2">
                        <CiCirclePlus
                            onClick={addItem}
                            className={`text-6xl ${itemsLength < 10 ? "text-lime-300 bg-lime-950" : "text-gray-400 bg-gray-800"} rounded-full`}
                        />

                        <CiCircleMinus
                            onClick={removeItem}
                            className={`text-6xl ${itemsLength > 1 ? "text-lime-300 bg-lime-950" : "text-gray-400 bg-gray-800"} rounded-full`}
                        />
                    </div>

                    <Form
                        ref={formRef}
                        onInput={() => {
                            setFormValid(formRef.current?.checkValidity());
                        }}
                        action="/number-array/create"
                        method="POST"
                        className="flex flex-col gap-2"
                    >
                        {Array.from({ length: itemsLength }, (_, i) => (
                            <div key={i} className="flex gap-2 items-baseline">
                                <span className="w-6 text-right text-2xl text-lime-300 font-light">{i + 1}.</span>
                                <NumberInput id={i + 1} />
                            </div>
                        ))}

                        <div className="w-fit mt-4">
                            <ButtonWrapper disabled={!formValid}>
                                <input
                                    type="submit"
                                    value="Create array!"
                                    disabled={!formValid}
                                />
                            </ButtonWrapper>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}