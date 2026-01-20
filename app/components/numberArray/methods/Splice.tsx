import { useEffect, useRef, useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { useLoaderData, useRevalidator } from "react-router";
import ButtonWrapper from "../../ButtonWrapper";
import MyArray from "../../MyArray";

function ItemsInput({ id, itemsLength }: { id: number, itemsLength: number }) {
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
    }, [input, itemsLength]);

    // when a new input is added, automatically focus it.
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <div className="flex items-center gap-2">
            <div className="flex gap-x-1 items-baseline">
                <input
                    ref={inputRef}
                    id={`numberInput-${id}`}
                    name={`numberInput-${id}`}
                    type="number"
                    min={-10000}
                    max={10000}
                    placeholder={`item${id}...`}
                    value={input}
                    required
                    onChange={(e) => setInput(e.target.value)}
                    className="px-2 py-1 bg-gray-100 text-gray-950 w-32 rounded-xs placeholder:text-sm focus:outline-lime-700 invalid:border-2 invalid:border-red-500"
                />,
            </div>

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

export default function Splice() {
    const myNumberArray = useLoaderData();
    const revalidator = useRevalidator();

    const formRef = useRef<HTMLFormElement>(null);
    const startRef = useRef<HTMLInputElement>(null);
    const deleteCountRef = useRef<HTMLInputElement>(null);
    
    const [startInputValue, setStartInputValue] = useState("");
    const [deleteCountPresent, setDeleteCountPresent] = useState(false);
    const [deleteCountInputValue, setDeleteCountInputValue] = useState<string | number>("");
    const [infinityTrue, setInfinityTrue] = useState(false);
    const [itemsLength, setItemsLength] = useState(0);
    
    const [startInputValueValid, setStartInputValueValid] = useState<boolean>(false);
    const [deleteCountInputValueValid, setDeleteCountInputValueValid] = useState<boolean>(true);
    const [formDataValid, setFormDataValid] = useState<boolean>(true);
    
    const [returnValue, setReturnValue] = useState<number[]>([]);

    useEffect(() => {
        if (deleteCountRef.current) {
            setDeleteCountInputValueValid(deleteCountRef.current.checkValidity());
        } else {
            setDeleteCountInputValueValid(true);
        }
    }, [deleteCountPresent, deleteCountInputValue]);

    useEffect(() => {
        if (infinityTrue) {
            setDeleteCountInputValue(Infinity);
        } else {
            setDeleteCountInputValue("");
        }
    }, [infinityTrue]);

    useEffect(() => {
        if (formRef.current) {
            setFormDataValid(formRef.current.checkValidity());
        }
    }, [itemsLength]);

    useEffect(() => {
        if (startRef.current) {
            setStartInputValueValid(startRef.current.checkValidity());
        }

        if (deleteCountRef.current) {
            setDeleteCountInputValueValid(deleteCountRef.current.checkValidity());
        }

        if (formRef.current) {
            setFormDataValid(formRef.current.checkValidity());
        }
    }, [startInputValueValid, deleteCountInputValueValid, formDataValid]);

    // function to add another input element.
    function addItem() {
        if (deleteCountPresent) {
            setItemsLength((length) => Math.min(length + 1, 5));
        }
    }

    // function to remove an input element.
    function removeItem() {
        setItemsLength((length) => Math.max(length - 1, 0));
    }

    function spliceMyNumberArray() {
        if (startInputValueValid && !deleteCountPresent) {
            const returnValue = myNumberArray.splice(parseInt(startInputValue));

            localStorage.setItem('myNumberArray', JSON.stringify(myNumberArray));

            setReturnValue(returnValue);
            revalidator.revalidate();
        } else if (startInputValueValid && deleteCountInputValueValid && itemsLength == 0) {
            const returnValue = myNumberArray.splice(parseInt(startInputValue), typeof deleteCountInputValue === "number" ? deleteCountInputValue : parseInt(deleteCountInputValue));

            localStorage.setItem('myNumberArray', JSON.stringify(myNumberArray));

            setReturnValue(returnValue);
            revalidator.revalidate();
        } else if (startInputValueValid && deleteCountInputValue && itemsLength > 0 && formRef.current && formDataValid) {
            const formData = new FormData(formRef.current);
    
            const valuesArray = Array.from(formData.values()).map(Number);

            const returnValue = myNumberArray.splice(
                parseInt(startInputValue), 
                typeof deleteCountInputValue === "number" ? deleteCountInputValue : parseInt(deleteCountInputValue), 
                ...valuesArray
            );

            localStorage.setItem('myNumberArray', JSON.stringify(myNumberArray));

            setReturnValue(returnValue);
            revalidator.revalidate();
        } 
    }

    return (
        <>
            <title>myNumberArray | .splice() Method</title>
            <p>
                The <code>.splice()</code> array method takes the following parameters: <code>start</code>, and optionally, <code>deleteCount</code> and one or more <code>items</code>. It will delete as many items as are specified in <code>deleteCount</code>, starting at <code>start</code>, replacing them with the item(s) specified in <code>items</code>. This method modifies the original array, and returns an array containing any deleted elements.
                <br/>
                <br/>
                If <code>deleteCount</code> is omitted, all elements from <code>start</code> to the end of the array will be deleted. If you wish to do this while still passing <code>items</code> into the array, use <code>Infinity</code> as your <code>deleteCount</code> value.
            </p>

            <div className="flex flex-col gap-2 my-2 p-3 bg-gray-950/75 rounded-sm">
                <code>myNumberArray.splice(</code>
                <div className="flex gap-x-1 items-baseline">
                    <input
                        ref={startRef}
                        id="splice-method-start"
                        type="number" 
                        min={myNumberArray.length * -1}
                        max={myNumberArray.length}
                        step="1"
                        placeholder="start..."
                        value={startInputValue}
                        required
                        onChange={(e) => {
                            setStartInputValueValid(e.target.checkValidity());
                            setStartInputValue(e.target.value);
                        }}
                        className="px-2 py-1 bg-gray-100 text-gray-950 w-20 rounded-xs placeholder:text-sm focus:outline-lime-700 invalid:border-2 invalid:border-red-500"
                    />,
                </div>

                { deleteCountPresent &&
                    <div className="flex gap-x-1 items-baseline">
                        <input
                            ref={deleteCountRef}
                            id="splice-method-delete-count"
                            type={infinityTrue ? "string" : "number"} 
                            min={0}
                            max={Infinity}
                            step="1"
                            placeholder={infinityTrue ? "Infinity" : "deleteCount..."}
                            value={infinityTrue ? "Infinity" : deleteCountInputValue}
                            required
                            onChange={(e) => {
                                setDeleteCountInputValueValid(e.target.checkValidity());
                                setDeleteCountInputValue(e.target.value);
                            }}
                            className="px-2 py-1 bg-gray-100 text-gray-950 w-32 rounded-xs placeholder:text-sm focus:outline-lime-700 invalid:border-2 invalid:border-red-500"
                        />,
                        <div className="hover:cursor-pointer" onClick={() => setInfinityTrue(!infinityTrue)}>
                            <ButtonWrapper disabled={false}>
                                {`${infinityTrue ? "Remove Infinity" : "Use Infinity"}`}
                            </ButtonWrapper>
                        </div>
                    </div>
                }

                <div className="mb-1 flex gap-1 items-center">
                    <CiCirclePlus
                        onClick={() => {
                            setDeleteCountPresent(true);
                        }}
                        className={`text-4xl shrink-0 ${!deleteCountPresent ? "text-lime-300 bg-lime-950" : "text-gray-400 bg-gray-800"} rounded-full`}
                    />
    
                    <CiCircleMinus
                        onClick={() => {
                            setDeleteCountPresent(false);
                            setItemsLength(0);
                        }}
                        className={`text-4xl shrink-0 ${deleteCountPresent ? "text-lime-300 bg-lime-950" : "text-gray-400 bg-gray-800"} rounded-full`}
                    />

                    <p className="italic">{`${deleteCountPresent ? "(Remove deleteCount from the array)" : "(Add a deleteCount to the array)"}`}</p>
                </div>

                { (itemsLength > 0) && deleteCountPresent &&
                    <form
                        ref={formRef}
                        onInvalid={() => setFormDataValid(false)}
                        onInput={() => {
                            if (formRef.current) {
                                setFormDataValid(formRef.current.checkValidity());
                            } else {
                                setFormDataValid(true);
                            }
                        }}
                        className="flex flex-col gap-2"
                    >
                        {Array.from({ length: itemsLength }, (_, i) => (
                            <ItemsInput key={ i + 1 } id={ i + 1 } itemsLength={itemsLength} />
                        ))}
                    </form>
                }

                { deleteCountPresent && 
                    <div className="mb-1 flex gap-1 items-center">
                        <CiCirclePlus
                            onClick={addItem}
                            className={`text-4xl shrink-0 ${deleteCountPresent && (itemsLength < 5) ? "text-lime-300 bg-lime-950" : "text-gray-400 bg-gray-800"} rounded-full`}
                        />
        
                        <CiCircleMinus
                            onClick={removeItem}
                            className={`text-4xl shrink-0 ${itemsLength > 0 ? "text-lime-300 bg-lime-950" : "text-gray-400 bg-gray-800"} rounded-full`}
                        />

                        <p className="italic">(Add items to the array)</p>
                    </div>
                }

                <div className="flex gap-x-1">
                    <code>)</code>
                </div>
                
                <div
                    onClick={spliceMyNumberArray}
                    className="w-fit"
                >
                    <ButtonWrapper disabled={!startInputValueValid || !deleteCountInputValueValid || !formDataValid }>
                        Click here to splice it!
                    </ButtonWrapper>
                </div>
            </div>
            
            {
                returnValue.length > 0 &&
                <>
                    <p className="mb-2">Returns deleted items:</p>
                    <div className="w-full overflow-x-scroll">
                        <MyArray array={returnValue} />
                    </div>
                </>
            }
        </>
    );
}