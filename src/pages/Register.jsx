//react icons
import { FcGoogle } from "react-icons/fc";
//
import { Form, Link, useActionData } from "react-router-dom";
//components
import { FormInput } from "../components";
//register hooks
import { useRegister } from "../hooks/useRegister";
import { toast } from 'react-toastify'
import { useEffect } from 'preact/hooks'

//action
export const action = async ({ request }) => {
  const form = await request.formData();
  const displayName = form.get("displayName");
  const email = form.get("email");
  const password = form.get("password");
  const confirm_password = form.get("confirm_password");

  if (password == confirm_password) {
    return {
      displayName,
      email,
      password,
      confirm_password,
    };
  }else{
     toast.error('Passwords is not equal!')
    return null;
  }
};

function Register() {
  const inputData = useActionData();
 
  useEffect(()=>{
    if(inputData){
      console.log('')
    }
  },[inputData])

  const { registerWithGoogle } = useRegister();
  return (
    <div className="flex min-h-screen w-full">
      <div className="auth-bg hidden w-[40%] md:block"></div>
      <div className="fixed bottom-0 left-0 top-0 w-full bg-black bg-opacity-30 md:hidden"></div>
      <div className="auth-bg flex w-full items-center justify-center md:w-[60%] md:bg-none">
        <Form
          method="post"
          className="relative z-50 w-full max-w-96 px-5 md:px-0"
        >
          <h1 className="mb-5 text-center font-display text-3xl font-semibold text-white md:text-4xl md:text-black">
            Register
          </h1>
          <div className="flex flex-col gap-2 md:gap-5">
            <FormInput placeholder="Full Name" name="displayName" type="text" />
            <FormInput placeholder="Email" name="email" type="email" />
            <FormInput placeholder="Password" name="password" type="password" />
            <FormInput
              placeholder="Confirm Password"
              name="confirm_password"
              type="password"
            />
          </div>
          <div className="my-5 flex flex-col gap-3 md:my-10 md:flex-row md:gap-5">
            <button
              type="submit"
              className="btn btn-primary btn-sm grow font-display text-xl md:btn-md hover:text-white"
            >
              Register
            </button>
            <button
              onClick={registerWithGoogle}
              type="button"
              className="btn btn-secondary btn-sm grow font-display text-xl md:btn-md hover:text-white"
            >
              <span>Google</span>
              <FcGoogle />
            </button>
          </div>
          <div className="text-center">
            <Link
              to={"/login"}
              className="link link-primary font-display text-white md:text-black"
            >
              You already have account ?
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
