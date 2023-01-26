import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

export const UserContext = React.createContext()
const username = 'Greg'

ReactDOM.render(
  <React.StrictMode>
    <UserContext.Provider value={username}>
    <App />
    </UserContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



reportWebVitals();
