import React, {useState, useEffect} from 'react';
import './Portfolio.css';
import {Add} from "../../../assets/icons/svg";
import work1 from "../../../assets/images/Profile Images/work_1.jpg";
import work3 from "../../../assets/images/Profile Images/work_3.jpg";
import work4 from "../../../assets/images/Profile Images/work_4.jpg";
import work6 from "../../../assets/images/Profile Images/work_6.jpg";
import work7 from "../../../assets/images/Profile Images/work_7.jpg";
import work8 from "../../../assets/images/Profile Images/work_8.jpg";
import NewProject from "./NewProject";
import {BrowserRouter, useHistory, Switch, Route, Link} from "react-router-dom";
import Project1 from "./Project1";


const Portfolio = (props) => {
    // const history = useHistory();
    // const [addProject, setProject] = useState(false);
    // const [watchProject, setWatch] = useState(false);
    //
    // useEffect(() => {
    //     console.log("Hello World");
    //     console.log(watchProject)
    // });
    //
    // const routeBack = () => {
    //     props.history.push("/profile/profile");
    // }

    const [test, setTest] = useState(true);


    return (
        <div className="portfolio-container">
           {/*<div>*/}
           {/* <Switch>*/}
           {/*     <Route path={'/profile/profile/portfolio/new'} component={NewProject}/>*/}
           {/* </Switch>*/}
           {/*</div>*/}

                <div>
                    <div className="portfolio-header">
                        <h3>Portfolio</h3>
                    </div>
                    <div className="projects-container">
                        <div
                            className="add-project"
                            onClick={() => setTest(false)}
                        >
                            <div className="add-button">
                                <Add/>
                            </div>
                            <span className="add-title">Add Project</span>
                        </div>
                        <div
                            className="portfolio-project">
                            <div  className="edit-delete">
                                <span>Edit | </span><span>Delete</span>
                            </div>
                            <img className="project-image" alt="work1" src={work1}/>
                        </div>

                        <div className="portfolio-project">
                            <div className="edit-delete">
                                <span>Edit | </span><span>Delete</span>
                            </div>
                            <img className="project-image" alt="work2" src={work3}/>
                        </div>
                        <div className="portfolio-project">
                            <div  className="edit-delete">
                                <span>Edit | </span><span>Delete</span>
                            </div>
                            <img className="project-image" alt="work3" src={work4}/>
                        </div>
                        <div className="portfolio-project">
                            <div  className="edit-delete">
                                <span>Edit | </span><span>Delete</span>
                            </div>
                            <img className="project-image" alt="work4" src={work7}/>
                        </div>
                        <div className="portfolio-project">
                            <div  className="edit-delete">
                                <span>Edit | </span><span>Delete</span>
                            </div>
                            <img className="project-image" alt="work5" src={work1}/>
                        </div>
                        <div className="portfolio-project">
                            <div  className="edit-delete">
                                <span>Edit | </span><span>Delete</span>
                            </div>
                            <img className="project-image" alt="work6" src={work8}/>
                        </div>
                        <div className="portfolio-project">
                            <div  className="edit-delete">
                                <span>Edit | </span><span>Delete</span>
                            </div>
                            <img className="project-image" alt="work7" src={work4}/>
                        </div>
                        <div className="portfolio-project">
                            <div  className="edit-delete">
                                <span>Edit | </span><span>Delete</span>
                            </div>
                            <img className="project-image" alt="work8" src={work6}/>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Portfolio;