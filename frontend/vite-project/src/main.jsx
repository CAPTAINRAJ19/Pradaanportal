import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
<Auth0Provider
    domain="dev-i8x4857pcvps6xfx.us.auth0.com"
    clientId="XYtDwuNAAPmlqFXPge4GwJ0iEEaznerG"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    
    <App />
</Auth0Provider>

)
