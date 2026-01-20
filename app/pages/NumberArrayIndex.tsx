import MyArrayMenu from "../components/MyArrayMenu";
import { useLoaderData } from "react-router";

export default function NumberArrayIndex() {
    const myNumberArray = useLoaderData<number[]>();

    return (
        <div className="mx-2">
            <MyArrayMenu array={myNumberArray} />
        </div>
    );
}