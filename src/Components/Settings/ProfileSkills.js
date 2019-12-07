import React from 'react';
import './ProfileSkills.css';


const ProfileSkills = () => {
    return (
        <div className="skills-setting">
            <h3 className="skills-title">Skills</h3>
            <br/>
            <h5>Choose your skills</h5>
        <div className="skill-container">
            <div className="left-block">
                <span className="sub-titles">IT and Application</span>
               <div> <input
                    type="radio"
                    className="skill-inputs"
                    value="sites"/>
                    Site Application
               </div>
                <div>
                <input
                    type="radio"
                    className="skill-inputs"
                    value="webApp"/>
                    Web Application
                </div>
                <div>
                <input
                    type="radio"
                    className="skill-inputs"
                    value="backEnd"/>
                    Back End Programming
                </div>

                <span className="sub-titles"> Mobile Programming</span>
                <div>
                <input
                    type="radio"
                    className="skill-inputs"
                    value="android"/>
                    Android Application
                </div>

                <div>
                <input
                    type="radio"
                    className="skill-inputs"
                    value="IOS"/>
                    IOS Application
                </div>

                <div>
                <input
                    type="radio"
                    className="skill-inputs"
                    value="UX/UI"/>
                    UX/UI Design
                </div>

                <span className="sub-titles"> 3D Visualization</span>
                <div>
                <input
                    type="radio"
                    className="skill-inputs"
                    value="animation"/>
                    3D Animation
                </div>

                <div>
                <input
                    type="radio"
                    className="skill-inputs"
                    value="modeling"/>
                    3D Modeling
                </div>

                <div>
                <input
                    type="radio"
                    className="skill-inputs"
                    value="interior"/>
                    Interior
                </div>
                <button type="button" className="skills-button">Save</button>
            </div>
            <div className="right-block">
                <span className="sub-titles">Copy Writing</span>
                <div>
                <input
                    type="radio"
                    className="skill-inputs"
                    value="copywriting"/>
                    Copy Writing
                </div>

                <div>
                <input
                    type="radio"
                    className="skill-inputs"
                    value="rewriting"/>
                    Rewriting
                </div>

                <div>
                <input
                    type="radio"
                    className="skill-inputs"
                    value="statements"/>
                    Statements
                </div>

                <span className="sub-titles">Design</span>
                <div>
                <input
                    type="radio"
                    className="skill-inputs"
                    value="webDesign"/>
                    Web Designing
                </div>

                <div>
                <input
                    type="radio"
                    className="skill-inputs"
                    value="mobileDesign"/>
                    Mobile Application Design
                </div>

                <div>
                <input
                    type="radio"
                    className="skill-inputs"
                    value="logo"/>
                    Logos
                </div>

                <div>
                <input
                    type="radio"
                    className="skill-inputs"
                    value="banners"/>
                    Banners
                </div>
            </div>
        </div>
        </div>
    );
};

export default ProfileSkills;