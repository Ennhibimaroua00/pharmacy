import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './Pages/CartContext.jsx' // ◄─── 1. Importi l-Provider dial l-Panier hna

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider> {/* ◄─── 2. Envelopper l-App wust l-Provider */}
        <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)