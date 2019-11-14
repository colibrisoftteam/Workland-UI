import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import SignUp from './components/auth/signup/SignUp';
import SignUpVer from './components/auth/signup/SignUpVer';
import SignUpComplete from './components/auth/signup/SignUpComplete';
import SignIn from './components/auth/signin/SignIn';

function App() {
  return (
    <div>
    <BrowserRouter>
              <Route path='/signup1' exact component={ SignUp } />
              <Route path='/signup2' component={ SignUpVer } />
              <Route path='/signup3' component={ SignUpComplete } />
              <Route path='/signin' component={ SignIn } />
       </BrowserRouter>
       </div>  
       );
}

export default App;
