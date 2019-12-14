import React from 'react';
import work1 from "../../assets/images/Profile Images/work_1.jpg";
import work3 from "../../assets/images/Profile Images/work_3.jpg";
import work4 from "../../assets/images/Profile Images/work_4.jpg";
import work7 from "../../assets/images/Profile Images/work_7.jpg";
import work8 from "../../assets/images/Profile Images/work_8.jpg";
import work6 from "../../assets/images/Profile Images/work_6.jpg";
import {Add} from "../../assets/icons/svg";
import './Portfolio-Projects.css';

const PortfolioProjects = (props) => {

    const routeContent = (route) => {
        props.history.push(`${route}`);
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="portfolio-container">
                            <div className="portfolio-header">
                                <h3>Portfolio</h3>
                                <div
                                    className="back-ref"
                                    onClick={() => routeContent("/profile")}>
                                    <span>Back</span>
                                </div>
                            </div>
                            <div className="projects-container">
                                <div className="add-project">
                                    <div
                                        onClick={() => routeContent("/new")}
                                        className="add-button">
                                        <Add/>
                                        <span className="add-title">Add Project</span>
                                    </div>
                                </div>
                                <div className="portfolio-project">
                                    <div  className="edit-delete">
                                        <span>Edit | </span><span>Delete</span>
                                    </div>
                                    <img className="project-image" alt="work1" src={work1}/>
                                    <div className="description">
                                        Lorem ipsum dolor sit amet, consectetur
                                    </div>
                                </div>

                                <div className="portfolio-project">
                                    <div className="edit-delete">
                                        <span>Edit | </span><span>Delete</span>
                                    </div>
                                    <img className="project-image" alt="work2" src={work3}/>
                                    <div className="description">
                                        Lorem ipsum dolor sit amet, consectetur
                                    </div>
                                </div>
                                <div className="portfolio-project">
                                    <div  className="edit-delete">
                                        <span>Edit | </span><span>Delete</span>
                                    </div>
                                    <img className="project-image" alt="work3" src={work4}/>
                                    <div className="description">
                                        Lorem ipsum dolor sit amet, consectetur
                                    </div>
                                </div>
                                <div className="portfolio-project">
                                    <div  className="edit-delete">
                                        <span>Edit | </span><span>Delete</span>
                                    </div>
                                    <img className="project-image" alt="work4" src={work7}/>
                                    <div className="description">
                                        Lorem ipsum dolor sit amet, consectetur
                                    </div>
                                </div>
                                <div className="portfolio-project">
                                    <div  className="edit-delete">
                                        <span>Edit | </span><span>Delete</span>
                                    </div>
                                    <img className="project-image" alt="work5" src={work1}/>
                                    <div className="description">
                                        Lorem ipsum dolor sit amet, consectetur
                                    </div>
                                </div>
                                <div className="portfolio-project">
                                    <div  className="edit-delete">
                                        <span>Edit | </span><span>Delete</span>
                                    </div>
                                    <img className="project-image" alt="work6" src={work8}/>
                                    <div className="description">
                                        Lorem ipsum dolor sit amet, consectetur
                                    </div>
                                </div>
                                <div className="portfolio-project">
                                    <div  className="edit-delete">
                                        <span>Edit | </span><span>Delete</span>
                                    </div>
                                    <img className="project-image" alt="work7" src={work4}/>
                                    <div className="description">
                                        Lorem ipsum dolor sit amet, consectetur
                                    </div>
                                </div>
                                <div className="portfolio-project">
                                    <div  className="edit-delete">
                                        <span>Edit | </span><span>Delete</span>
                                    </div>
                                    <img className="project-image" alt="work8" src={work6}/>
                                    <div className="description">
                                        Lorem ipsum dolor sit amet, consectetur
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioProjects;