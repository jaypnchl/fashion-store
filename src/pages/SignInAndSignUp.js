import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

function SignInAndSignUp() {
  return (
    <div className=" sm:w-[850px] flex flex-col sm:flex-row sm:justify-between my-[30px] mx-auto space-y-20 sm:space-y-0">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignInAndSignUp;
