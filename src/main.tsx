import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'sweetalert2/src/sweetalert2.scss'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
