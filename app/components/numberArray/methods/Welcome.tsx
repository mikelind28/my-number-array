import { Link } from "react-router";
import ButtonWrapper from "../../ButtonWrapper";

export default function Welcome() {
  return (
    <div className="flex w-[90%] flex-col items-center gap-3 text-center">
      <p className="text-xl">
        Select a method from below to explore its effect on{" "}
        <code>myNumberArray!</code>
      </p>
      <p className="text-lg">or...</p>
      <Link to="/number-array/create">
        <ButtonWrapper disabled={false}>
          <p>
            Recreate <code>myNumberArray</code>
          </p>
        </ButtonWrapper>
      </Link>
    </div>
  );
}
