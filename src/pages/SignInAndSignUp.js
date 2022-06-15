import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

function SignInAndSignUp() {
  return (
    <div className="w-[850px] flex justify-between my-[30px] mx-auto">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignInAndSignUp;
