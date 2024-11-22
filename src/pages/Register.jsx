import React from "react";
import { Form } from "react-router-dom";
import { FormInput } from "../components";
import { FcGoogle } from "react-icons/fc";

function Register() {
  return (
    <div className="flex min-h-screen w-full">
      <div className='w-[40%] bg-orange-300 bg-[url("https://picsum.photos/900/1200")] bg-cover bg-center'></div>
      <div className="flex w-[60%] items-center justify-center">
        <Form method="post" className="w-full max-w-96">
          <h1 className="mb-5 text-center font-display text-4xl font-semibold">
            Register
          </h1>
          <div className="flex flex-col gap-5">
            <FormInput placeholder="Full Name" name="displayName" type="text" />
            <FormInput placeholder="Email" name="email" type="email" />
            <FormInput placeholder="Password" name="password" type="password" />
            <FormInput
              placeholder="Confirm Password"
              name="password"
              type="password"
            />
          </div>
          <div className="my-10 flex gap-5">
            <button
              type="submit"
              className="btn btn-primary grow font-display text-xl hover:text-white"
            >
              Register
            </button>
            <button
              type="button"
              className="btn btn-secondary grow font-display text-xl hover:text-white"
            >
              <span>Google</span>
              <FcGoogle />
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
