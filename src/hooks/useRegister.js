//firebase imports
import { auth } from "../firebase/firebaseconfig";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
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
        toast.success(`Welcome ${user.displayName}`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  const registerWithEmail = async (displayName, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        await updateProfile(auth.currentUser, {
          displayName: displayName,
          photoURL: `https://api.dicebear.com/9.x/initials/svg?seed=${displayName}`,
        });
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        // toast.success(`Welcome ${displayName}`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  return { registerWithGoogle, registerWithEmail };
};
