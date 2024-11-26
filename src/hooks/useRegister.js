//firebase imports
import { auth } from "../firebase/firebaseconfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
//toaster
import { toast } from "react-toastify";

// global context
import { useGlobalContext } from "./useGlobalContext";
export const useRegister = () => {
  const { dispatch } = useGlobalContext();
  const registerWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch({ type: "LOGIN", payload: user });
        toast.success("Welcome");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  return { registerWithGoogle };
};
