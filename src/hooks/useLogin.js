import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseconfig";
import { toast } from "react-toastify";

import { useGlobalContext } from "./useGlobalContext";

export default function useLogin() {
  const { dispatch } = useGlobalContext();
  const loginWithEmail = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        toast.success(`Welcome back ${user.displayName}`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);

        toast.error("Email or password is incorrect");
      });
  };
  return { loginWithEmail };
}
