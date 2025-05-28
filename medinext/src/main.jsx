import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '../src/index.css';
import MediNextApp from './MediNextApp.jsx'
import { InfoProvider } from './context/InfoContext.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
		<InfoProvider>
			<BrowserRouter>
				<MediNextApp />
			</BrowserRouter>
		</InfoProvider>
    </StrictMode>,
)
