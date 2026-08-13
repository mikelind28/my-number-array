import { Link } from "react-router";
import ButtonWrapper from "../../ButtonWrapper";

export default function Welcome() {
  return (
    <>
      <p className="">
        Select a method from below to explore its effect on{" "}
        <code>myNumberArray</code>!
      </p>
      <p className="">or...</p>
      <Link to="/number-array/create" className="w-fit">
        <ButtonWrapper style="normal">
          <p>
            Recreate <code>myNumberArray</code>
          </p>
        </ButtonWrapper>
      </Link>
    </>
  );
}
