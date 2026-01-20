import { useEffect, useRef, useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import ButtonWrapper from "../../ButtonWrapper";
import MyArray from "../../MyArray";
import { useLoaderData } from "react-router";

type CreateNumberArray2Type = {
    setMyNumberArray2: React.Dispatch<React.SetStateAction<number[]>>;
}

function NumberInput({ id }: { id: number }) {
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
        <li className="mx-1 my-1 pl-2">
            <title>myNumberArray | .concat() Method</title>
            <div className="flex items-center gap-2">
                <input
                    ref={inputRef}
                    id={`numberInputConcat-${id}`}
                    name={`numberInputConcat-${id}`}
                    type="number"
                    min={-10000}
                    max={10000}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    required
                    className="w-fit px-2 py-1 bg-gray-50 text-lime-800 font-light rounded-sm focus:outline-lime-700 invalid:border-2 invalid:border-red-400"
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
        </li>
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
            <h2 className="text-lg text-lime-300 font-light leading-6">Add up to 5 numbers to create <code>myNumberArray2:</code></h2>

            <div className="mt-2 mb-4 flex gap-3">
                <CiCirclePlus
                    onClick={addItem}
                    className={`text-6xl ${itemsLength < 5 ? "text-lime-300 bg-lime-950" : "text-gray-400 bg-gray-800"} rounded-full`}
                />

                <CiCircleMinus
                    onClick={removeItem}
                    className={`text-6xl ${itemsLength > 1 ? "text-lime-300 bg-lime-950" : "text-gray-400 bg-gray-800"} rounded-full`}
                />
            </div>

            <form
                ref={formRef}
                onInput={() => {
                    setFormValid(formRef.current?.checkValidity());
                }}
            >
                <ol
                    className="m-2 ml-10 text-2xl text-lime-300 flex flex-col gap-2 list-decimal"
                >
                    {
                        Array.from(
                            { length: itemsLength }, 
                            (_, i) => (
                                <NumberInput 
                                    key={i + 1} 
                                    id={i + 1}
                                />
                            )
                        )
                    }
                </ol>

                <div className="w-fit mt-4">
                    <ButtonWrapper disabled={!formValid}>
                        <input
                            type="button"
                            value="Concat them!"
                            disabled={!formValid}
                            onClick={handleSubmit}
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
            <p>The <code>.concat()</code> array method merges two or more arrays, and returns the newly-merged array without modifying the original.</p>

            <div className="flex flex-col gap-2 my-2 p-3 bg-gray-950/75 rounded-sm">
                <CreateNumberArray2 setMyNumberArray2={setMyNumberArray2}/>
            </div>
            {
                myNumberArray2.length > 0
                ? (
                <div className="flex flex-col">
                    <div className="mb-3 flex flex-wrap gap-x-1 items-baseline leading-5">
                        <p className="flex flex-wrap">
                            <code>myNumberArray.</code><code>concat(myNumberArray2)</code>
                        </p>
                        returns:
                    </div>
                    <div className="w-full overflow-x-scroll">
                        <MyArray array={myNumberArray.concat(myNumberArray2)} />
                    </div>
                </div> )
                : null
            }
        </>
    );
}