import { Link } from "react-router";
import ButtonWrapper from "../../ButtonWrapper";

export default function Welcome() {
    return (
        <div className="w-[90%] flex flex-col gap-3 items-center text-center">
            <p className="text-xl">Select a method from below to explore its effect on <code>myNumberArray!</code></p>
            <p className="text-lg">or...</p>
            <Link to="/number-array/create">
                <ButtonWrapper disabled={false}>
                    <p>Recreate <code>myNumberArray</code></p>
                </ButtonWrapper>
            </Link>
        </div>
    );
}