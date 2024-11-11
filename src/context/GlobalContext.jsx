import { createContext } from 'react'
import { useReducer } from 'preact/hooks'

export const GlobalContext = createContext()
const changeState = (state, action) => {
	const { type, payload } = action

	switch (type) {
		case 'LIKE':
			return { ...state, likedImages: [...state.likedImages, payload] }
		case 'UNLIKE':
			return {
				...state,
				likedImages: state.likedImages.filter(image => image.id !== payload),
			}
		default:
			return state
	}
}
export function GlobalContextProvider({ children }) {
	const [state, dispatch] = useReducer(changeState, {
		likedImages: [],
	})
	return (
		<GlobalContext.Provider value={{ ...state, dispatch }}>
			{children}
		</GlobalContext.Provider>
	)
}
