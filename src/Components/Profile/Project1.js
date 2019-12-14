import React from 'react';
import "./Project1.css";
import work1 from "../../assets/images/Profile Images/work_1.jpg";

const Project1 = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="projectContainer">
                        <div className="projectHeader">
                            <div className="previousButton">
                                Previous project
                            </div>
                            <div className="projectTitle">
                                <h5>Design of Mercedes-benz</h5>
                                <div>Added date:  20 november 2018 year</div>
                                <div>5 views</div>
                            </div>
                            <div className="nextButton">
                                Next project
                            </div>

                        </div>
                        <div className="projectContent">
                            <div className="about">
                                <h5>About project</h5>
                                <div className="aboutProject">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Assumenda consequuntur cumque dolores eos ipsa iste libero magni
                                    modi porro, praesentium soluta, sunt! Commodi eaque eum mollitia,
                                    necessitatibus quas tempore voluptates? Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Ab architecto corporis cupiditate
                                    delectus deserunt ea enim eum fuga fugit id minima minus nam natus
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h5>Skill: </h5>
                                </div>
                                <div className="projectSkill">
                                    <div className="freelanceSkill">
                                        Web Programming
                                    </div>
                                    <div className="freelanceSkill">
                                        Mobile Programming
                                    </div>
                                    <div className="freelanceSkill">
                                        Web Design
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h5>Files: </h5>
                                </div>
                                <div className="projectFiles">
                                    <div className="projectImage">
                                        <img className="project-image" alt="work1" src={work1}/>
                                    </div>
                                    <div className="projectImage">
                                        <img className="project-image" alt="work1" src={work1}/>
                                    </div>
                                    <div className="projectImage">
                                        <img className="project-image" alt="work1" src={work1}/>
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

export default Project1;