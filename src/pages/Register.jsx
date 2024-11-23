import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Form, Link } from "react-router-dom";
import { FormInput } from "../components";

function Register() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="auth-bg hidden w-[40%] md:block"></div>
      <div className="auth-bg flex w-full items-center justify-center md:w-[60%] md:bg-none">
        <Form method="post" className="w-full max-w-96 px-5 md:px-0">
          <h1 className="mb-5 text-center font-display text-3xl font-semibold text-white md:text-4xl md:text-black">
            Register
          </h1>
          <div className="flex flex-col gap-2 md:gap-5">
            <FormInput placeholder="Full Name" name="displayName" type="text" />
            <FormInput placeholder="Email" name="email" type="email" />
            <FormInput placeholder="Password" name="password" type="password" />
            <FormInput
              placeholder="Confirm Password"
              name="password"
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
              className="link link-primary text-white md:text-black"
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
