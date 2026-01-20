import { useState, useEffect } from "react";
import MyArray from "../../MyArray";
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
            const arrayToReturn = myNumberArray.filter((value: number) => value < parseInt(inputValue));
            setArrayToReturn(arrayToReturn);
        }
        if (selectValue === "<=") {
            const arrayToReturn = myNumberArray.filter((value: number) => value <= parseInt(inputValue));
            setArrayToReturn(arrayToReturn);
        }
        if (selectValue === ">") {
            const arrayToReturn = myNumberArray.filter((value: number) => value > parseInt(inputValue));
            setArrayToReturn(arrayToReturn);
        }
        if (selectValue === ">=") {
            const arrayToReturn = myNumberArray.filter((value: number) => value >= parseInt(inputValue));
            setArrayToReturn(arrayToReturn);
        }
        if (selectValue === "=") {
            const arrayToReturn = myNumberArray.filter((value: number) => value === parseInt(inputValue));
            setArrayToReturn(arrayToReturn);
        }
    }, [selectValue, inputValue, myNumberArray]);

    return (
        <>
            <title>myNumberArray | .filter() Method</title>
            <p>
                The <code>.filter()</code> array method takes a test function as a parameter. It returns a shallow copy of the array containing only the elements that pass the test.
            </p>

            <div className="flex flex-col gap-2 my-2 p-2 bg-gray-950/75 rounded-sm">
                <div className="flex flex-wrap items-baseline leading-6">
                    <code>myNumberArray.filter(</code>
                    <code>(value){` => {`}</code>
                </div>
                <div className="ml-4 flex flex-wrap gap-1 items-baseline leading-5">
                    <code>value</code>
                    <select 
                        id="every-method-operator"
                        onChange={(e) => {
                            setSelectValue(e.target.value);
                        }}
                        className="border border-lime-950 rounded-sm p-1 bg-gray-700"
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
                        className="px-2 py-1 bg-gray-100 text-gray-950 w-16 rounded-xs placeholder:text-sm focus:outline-lime-700 invalid:border-2 invalid:border-red-500"
                    />

                </div>
                <code>{`})`}</code>
            </div>

            <p className="mb-2">returns:</p>

            {
                !inputValueValid &&
                <div className="w-fit bg-lime-950 rounded-md px-2 py-1">
                    <p className="text-2xl">
                        undefined
                    </p>
                </div>
            }
            {
                inputValueValid &&
                <div className="w-full overflow-x-scroll">
                    <MyArray array={arrayToReturn} />
                </div>
            }
        </>
    );
}