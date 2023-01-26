import {UserContext} from './index';
import React from 'react';


function App() {
  return <div>
      <UserContext.Consumer>
        {value => <div>Reveived, {value} </div>}
      </UserContext.Consumer>
    </div>
  
}

export default App;
