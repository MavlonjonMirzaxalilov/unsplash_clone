import { useReducer } from "preact/hooks";
import { createContext, useEffect } from "react";

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
    case "LIKE":
      return { ...state, likedImages: [...state.likedImages, payload] };
    case "UNLIKE":
      return {
        ...state,
        likedImages: state.likedImages.filter((image) => image.id !== payload),
      };
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

  useEffect(() => {
    localStorage.setItem("my-splash-data", JSON.stringify(state));
  }, [state]);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
