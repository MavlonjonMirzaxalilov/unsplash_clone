import { render } from 'preact'
import App from './app'
import './index.css'
import { GlobalContextProvider } from './context/GlobalContext'
render(
	<GlobalContextProvider>
		<App />
	</GlobalContextProvider>,
	document.getElementById('app')
)
