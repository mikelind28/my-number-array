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
            const result = myNumberArray.every((value: number) => value < parseInt(inputValue));
            setReturnValue(result);
        }
        if (selectValue === "<=") {
            const result = myNumberArray.every((value: number) => value <= parseInt(inputValue));
            setReturnValue(result);
        }
        if (selectValue === ">") {
            const result = myNumberArray.every((value: number) => value > parseInt(inputValue));
            setReturnValue(result);
        }
        if (selectValue === ">=") {
            const result = myNumberArray.every((value: number) => value >= parseInt(inputValue));
            setReturnValue(result);
        }
        if (selectValue === "=") {
            const result = myNumberArray.every((value: number) => value === parseInt(inputValue));
            setReturnValue(result);
        }
    }, [selectValue, inputValue, myNumberArray]);

    return (
        <>
            <title>myNumberArray | .every() Method</title>
            <p>
                The <code>.every()</code> array method takes a test function as a parameter. If every value in the array satisfies the test function, the <code>.every()</code> method will return <code>true</code>. If any one value does not satisfy the test condition, it will return <code>false</code>.
            </p>

            <div className="flex flex-col gap-2 my-2 p-2 bg-gray-950/75 rounded-sm">
                <div className="flex flex-wrap items-baseline leading-6">
                    <code>myNumberArray.every(</code>
                    <code>(value){` => {`}</code>
                </div>
                <div className="flex flex-wrap gap-1 items-baseline leading-5">
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
            </div>

            <p className="mb-2">returns:</p>
            <div className="w-fit bg-lime-950 rounded-md px-2 py-1">
                <p className="text-2xl">
                    {
                        !inputValueValid 
                        ?
                        "undefined"
                        :
                        returnValue.toString()
                    }
                </p>
            </div>
        </>
    );
}