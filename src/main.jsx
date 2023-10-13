import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthContextProvider } from './contexts/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
)
