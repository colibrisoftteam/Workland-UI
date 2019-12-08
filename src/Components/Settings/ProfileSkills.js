import React from 'react';
import './ProfileSkills.css';
import {Plus} from "../../assets/icons/svg";


const ProfileSkills = () => {
    return (
        <div className="skills-setting">
            <h3 className="skills-title">Skills</h3>
            <div className="choosed-skills">
                <div className="skill1">
                    Web Programming
                </div>
            </div>
            <div className="new-skill">
                <span>Enter new skill:</span>
                <br/>
                <input
                type="text"
                placeholder="Enter name of skill"
                className="skill-adder"
                />
                <button className="add-new-skill"><Plus/></button>
            </div>
            <br/>
            <h5>Choose your skills</h5>
        <div className="skill-container">
            <div className="left-block">
                <span className="sub-titles">IT and Application</span>
               <div>
                   <input
                    type="checkbox"
                    className="check-input"
                    value="sites"/>
                    Site Application
               </div>
                <div>
                <input
                    type="checkbox"
                    className="check-input"
                    value="webApp"/>
                    Web Application
                </div>
                <div>
                <input
                    type="checkbox"
                    className="check-input"
                    value="backEnd"/>
                    Back End Programming
                </div>

                <span className="sub-titles"> Mobile Programming</span>
                <div>
                <input
                    type="checkbox"
                    className="check-input"
                    value="android"/>
                    Android Application
                </div>

                <div>
                <input
                    type="checkbox"
                    className="check-input"
                    value="IOS"/>
                    IOS Application
                </div>

                <div>
                <input
                    type="checkbox"
                    className="check-input"
                    value="UX/UI"/>
                    UX/UI Design
                </div>

                <span className="sub-titles"> 3D Visualization</span>
                <div>
                <input
                    type="checkbox"
                    className="check-input"
                    value="animation"/>
                    3D Animation
                </div>

                <div>
                <input
                    type="checkbox"
                    className="check-input"
                    value="modeling"/>
                    3D Modeling
                </div>

                <div>
                <input
                    type="checkbox"
                    className="check-input"
                    value="interior"/>
                    Interior
                </div>
                <button type="button" className="skills-button">Save</button>
            </div>
            <div className="right-block">
                <span className="sub-titles">Copy Writing</span>
                <div>
                <input
                    type="checkbox"
                    className="check-input"
                    value="copywriting"/>
                    Copy Writing
                </div>

                <div>
                <input
                    type="checkbox"
                    className="check-input"
                    value="rewriting"/>
                    Rewriting
                </div>

                <div>
                <input
                    type="checkbox"
                    className="check-input"
                    value="statements"/>
                    Statements
                </div>

                <span className="sub-titles">Design</span>
                <div>
                <input
                    type="checkbox"
                    className="check-input"
                    value="webDesign"/>
                    Web Designing
                </div>

                <div>
                <input
                    type="checkbox"
                    className="check-input"
                    value="mobileDesign"/>
                    Mobile Application Design
                </div>

                <div>
                <input
                    type="checkbox"
                    className="check-input"
                    value="logo"/>
                    Logos
                </div>

                <div>
                <input
                    type="checkbox"
                    className="check-input"
                    value="banners"/>
                    Banners
                </div>
            </div>
        </div>
        </div>
    );
};

export default ProfileSkills;