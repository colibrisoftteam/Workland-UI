import React, {Component} from 'react';
import './App.css';
import Navbar from "./Components/Navbars/Navbar";
import MainNav from "./Components/Navbars/MainNav";
import { Route, Switch} from "react-router-dom";
import Profile from "./Components/Settings/Profile";
import Chat from './Components/Dashboard/Chat';
import MyProjects from './Components/Dashboard/MyProjects'
import SearchOrder from './Components/Dashboard/SearchOrder';
import GiveOrder from './Components/Dashboard/GiveOrder';
import SignIn from "./Components/auth/signin/SignIn";
import SignUp from "./Components/auth/signup/SignUp";
import SignUpVer from "./Components/auth/signup/SignUpVer";
import SignUpComplete from "./Components/auth/signup/SignUpComplete";
import Portfolio from "./Components/Profile/Portfolio";
import PortfolioProjects from "./Components/Profile/Portfolio-Projects";
import NewProject from "./Components/Profile/NewProject";
import Project1 from "./Components/Profile/Project1";
import ProfilePayment from "./Components/Settings/ProfilePayment";
import Help from "./Components/Help/Help";


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
                    <Route path={'/profile'} component={Portfolio}/>
                    <Route path={'/settings'} component={Profile}/>
                    <Route path={'/payment'} component={ProfilePayment}/>
                    <Route path={'/help'} component={Help}/>
                    <Route path={'/edit'} component={PortfolioProjects}/>
                    <Route path={'/new'} component={NewProject}/>
                    <Route path={'/project'} component={Project1}/>
                </Switch>
            </div>
        );
    }

}
export default App;

/*
*adadasdasda
* dadadadada
* dsadadadadas
* asdadadadada
* asdadadadsad
* */