import { useContext } from 'preact/hooks'
import { GlobalContext } from '../context/GlobalContext'

export const useGlobalContext = () => {
	const context = useContext(GlobalContext)

	if(!context) {
		throw new Error('useGlobalContext must be used within a GlobalContextProvider')
	}

	return context
}