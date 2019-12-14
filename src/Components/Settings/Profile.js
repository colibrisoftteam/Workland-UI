import React, { useState, useEffect } from 'react';
import ProfileContent from './ProfileContent';
import AboutSettings from "./AboutSettings";
import ProfileSecurity from "./ProfileSecurity";
import ProfileSkills from "./ProfileSkills";
import ProfilePayment from "./ProfilePayment";
import TaskCard from "./TaskCard";
import TasksView from "./TasksView";
import Task from "./Task";
import DeleteAccount from "./DeleteAccount";
import Portfolio from "../Profile/Portfolio/Portfolio";
import { Switch, Route } from "react-router-dom";
import "./Profile.css"

const Profile = (props) => {
    const [active, setRoute] = useState("profile");

    function routeSettings(route) {
        props.history.push(`/settings/${route}`);

        setRoute(route);
    }

    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col col-lg-3">
                    <div className="settings-panel">
                        <div onClick={() => routeSettings("profile")}>
                            <button
                                className={`${active === "profile" ? "active-setting" : "nonactive-setting"}`}>
                                Profile
                            </button>
                        </div>

                        <div onClick={() => routeSettings("about")}>
                            <button
                                className={`${active === "about" ? "active-setting" : "nonactive-setting"}`}>
                                Settings About
                            </button>
                        </div>

                        <div onClick={() => routeSettings("security")}>
                            <button
                                className={`${active === "security" ? "active-setting" : "nonactive-setting"}`}>
                                Security
                            </button>
                        </div>

                        <div onClick={() => routeSettings("skills")}>
                            <button
                                className={`${active === "skills" ? "active-setting" : "nonactive-setting"}`}>
                                Skills
                            </button>
                        </div>

                        <div onClick={() => routeSettings("payment")}>
                            <button
                                className={`${active === "payment" ? "active-setting" : "nonactive-setting"}`}>
                                Type of Payment
                            </button>
                        </div>

                        <div onClick={() => routeSettings("taskcard")}>
                            <button
                                className={`${active === "taskcard" ? "active-setting" : "nonactive-setting"}`}>
                                Task Card
                            </button>
                        </div>
                        <div onClick={() => routeSettings("tasksview")}>
                            <button
                                className={`${active === "tasksview" ? "active-setting" : "nonactive-setting"}`}>
                                Tasks View
                            </button>
                        </div>
                        <div onClick={() => routeSettings("task")}>
                            <button
                                className={`${active === "task" ? "active-setting" : "nonactive-setting"}`}>
                                Task
                            </button>
                        </div>

                        <div onClick={() => routeSettings("delete")}>
                            <button
                                className={`${active === "delete" ? "active-setting" : "nonactive-setting"}`}>
                                Delete Account
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col col-lg-9">
                    <div className="profile-content">
                        <Switch>
                            <Route path={'/settings/profile'} component={ProfileContent} />
                            <Route path={'/settings/about'} component={AboutSettings} />
                            <Route path={'/settings/security'} component={ProfileSecurity} />
                            <Route path={'/settings/skills'} component={ProfileSkills} />
                            <Route path={'/settings/payment'} component={ProfilePayment} />
                            <Route path={'/settings/portfolio'} component={Portfolio} />
                            <Route path={'/settings/taskcard'} component={TaskCard} />
                            <Route path={'/settings/tasksview'} component={TasksView} />
                            <Route path={'/settings/task'} component={Task} />
                            <Route path={'/settings/delete'} component={DeleteAccount} />
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;

