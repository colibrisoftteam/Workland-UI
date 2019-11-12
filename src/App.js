import React, {Component} from 'react';
import './App.css';
import Navbar from "./Components/Navbars/Navbar";
import MainNav from "./Components/Navbars/MainNav";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import Chat from './Components/Dashboard/Chat';
import MyProjects from './Components/Dashboard/MyProjects'
import SearchOrder from './Components/Dashboard/SearchOrder';
import GiveOrder from './Components/Dashboard/GiveOrder';


class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <MainNav/>
                    <Navbar/>
                    <Route exact path={'/dashboard/search_order'} component={SearchOrder}/>
                    <Route  path={'/dashboard/give_order'} component={GiveOrder}/>
                    <Route  path={'/dashboard/projects'} component={MyProjects}/>
                    <Route  path={'/dashboard/chat'} component={Chat}/>
                    <Route path={'/profile'} component={Profile}/>
                </BrowserRouter>

            </div>
        );
    }
}

export default App;