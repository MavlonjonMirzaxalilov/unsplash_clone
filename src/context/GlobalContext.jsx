import { createContext } from 'preact'
import { useReducer } from 'preact/hooks'

export const GlobalContext = createContext()
const changeState = (state, action) => {
	const { type, payload } = action

	switch(type){
		case 'LIKE_IMAGE':
      return {...state, likedImages: [...state.likedImages, payload]}
    case 'UNLIKE_IMAGE':
      return {...state, likedImages: state.likedImages.filter(image => image!==payload)}
    default:
      return state;
	}
}
export function GlobalContextProvider({ children }) {
	const [state, dispatch] = useReducer(changeState, {
		likedImages: [],
	})
	return <GlobalContext.Provider value={{...state,dispatch}}>{children}</GlobalContext.Provider>
}
