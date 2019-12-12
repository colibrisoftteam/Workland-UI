import React from 'react';
import "./NewProject.css";
import {Plus} from "../../assets/icons/svg";




const NewProject = (props) => {

    const routeBack = () => {
        props.history.push("/profile");
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="portfolio-container">
                            <div className="addProject-title">
                                <h3>New Project</h3>
                                <div>
                                    <span
                                        className="back-profile"
                                        onClick={() => routeBack()}>Back to portfolio</span>
                                </div>
                            </div>
                            <div className="new-project">
                                <span>Project Name</span>
                                <input
                                    className="project-name"
                                    name="projectName"
                                    type="text"
                                />
                                <span>Description</span>
                                <textarea
                                    className="project-description"
                                />
                            </div>
                            <div className="file-upload">
                                <span>Files</span>
                                <div className="file-input">
                                    <button
                                        type="file"
                                        className="files"
                                    >
                                        Add file
                                    </button>
                                    <p className="submit-rules">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Ad, aliquam commodi consectetur enim minima, nostrum odit
                                        optio pariatur quaerat quisquam quo rem, sit? Accusamus
                                    </p>
                                </div>
                            </div>
                            <div className="project-skills">
                                <h6>Add references <span className="add-ref"><i className="icon ion-md-add"></i></span></h6>
                                <span>Skills</span>
                                <div>
                                    <input
                                        type="text"
                                        name="skill"
                                        placeholder="Skill..."
                                        className="skill-input"
                                    />
                                    <button className="add-skill"><Plus /></button>
                                </div>
                                <div className="selected-skills">
                                    <div className="selected-skill">
                                        Web design
                                    </div>
                                </div>

                                <div className="project-save">
                                    <button className="save-project">Save</button>
                                    <span className="cancel-project">Cancel</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProject;