import {UserContext} from './index';
import React,{useContext, UserContext} from 'react';


function App() {
  const value = useContext(UserContext)
  return <div>
    Received,{value}
    </div>
  
}

export default App;
