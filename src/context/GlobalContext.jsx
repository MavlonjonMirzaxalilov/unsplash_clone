import { useReducer } from "preact/hooks";
import { createContext, useEffect } from "react";
import { useCollection } from "./../hooks/useCollection";

export const GlobalContext = createContext();

// const dataFromLocalStorage = () => {
// 	return (
// 		JSON.parse(localStorage.getItem('my-splash-data')) || {
// 			likedImages: [],
// 			downloadImages: [],
// 		}
// 	)
// }
const changeState = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN":
      return { ...state, user: payload };
    case "AUTH_READY":
      return { ...state, authReady: true };
    case "LOGOUT":
      return { ...state, user: null };
    case "ADD_COLLECTION_DATA":
      return { ...state, likedImages: payload };

    default:
      return state;
  }
};
export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, {
    user: null,
    authReady: false,
    likedImages: [],
    downloadImages: [],
  });
  const { data: likedImages } = useCollection("likedImages", [
    "uid",
    "==",
    state.user && state.user.uid,
  ]);

  useEffect(() => {
    localStorage.setItem("my-splash-data", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    if (likedImages)
      dispatch({ type: "ADD_COLLECTION_DATA", payload: likedImages });
  }, [likedImages]);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
