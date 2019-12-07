import React, {Component} from 'react';
import './App.css';
import Navbar from "./Components/Navbars/Navbar";
import MainNav from "./Components/Navbars/MainNav";
import { Route, Switch} from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import Chat from './Components/Dashboard/Chat';
import MyProjects from './Components/Dashboard/MyProjects'
import SearchOrder from './Components/Dashboard/SearchOrder';
import GiveOrder from './Components/Dashboard/GiveOrder';
import SignIn from "./Components/auth/signin/SignIn";
import SignUp from "./Components/auth/signup/SignUp";
import SignUpVer from "./Components/auth/signup/SignUpVer";
import SignUpComplete from "./Components/auth/signup/SignUpComplete";
import AboutSettings from "./Components/Profile/AboutSettings";
import ProfilePayment from "./Components/Profile/ProfilePayment";
import Help from "./Components/Profile/Help";


class App extends Component {
    render() {
        return (
            <div>
                <MainNav/>
                <Navbar/>
                <Switch>
                    <Route path='/signin' component={ SignIn } />
                    <Route path='/signup1' exact component={ SignUp } />
                    <Route path='/signup2' component={ SignUpVer } />
                    <Route path='/signup3' component={ SignUpComplete } />
                    <Route exact path={'/dashboard/search_order'} component={SearchOrder}/>
                    <Route path={'/dashboard/give_order'} component={GiveOrder}/>
                    <Route path={'/dashboard/projects'} component={MyProjects}/>
                    <Route path={'/dashboard/chat'} component={Chat}/>
                    <Route path={'/profile'} component={Profile}/>
                    <Route path={'/settings'} component={AboutSettings}/>
                    <Route path={'/payment'} component={ProfilePayment}/>
                    <Route path={'/help'} component={Help}/>
                </Switch>
            </div>
        );
    }

}
export default App;

/*

 */