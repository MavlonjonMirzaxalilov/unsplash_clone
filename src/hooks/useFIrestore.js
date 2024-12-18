// import firebase
import { doc, deleteDoc, addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebaseconfig";

//toaster
import { toast } from "react-toastify";
export const useFireStore = () => {
  const addDocument = (collectionName, data) => {
    addDoc(collection(db, collectionName), data)
      .then(() => {
        toast.success("You liked this image❤️");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const deleteDocument = (collectionName, id) => {
    deleteDoc(doc(db, collectionName, id))
      .then(() => {
        toast.error("You disliked this image💔");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return { addDocument, deleteDocument };
};
