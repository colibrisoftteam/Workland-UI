import React from 'react';
import "./AboutSettings.css";


const AboutSettings = () => {
    return (
        <div>
            <h3 className="about-title">Personal Information</h3>
            <span className="date-title">Date of birth</span>
            <div className="personal-forms">
            <select className="date-dropdown">
                <option>12</option>
                <option>21</option>
                <option>29</option>
            </select>
            <select className="month-dropdown">
                <option>September</option>
                <option>January</option>
                <option>December</option>
            </select>
            <select className="year-dropdown">
                <option>1998</option>
                <option>1997</option>
                <option>1996</option>
            </select>
            </div>

            <span className="gender-title">Gender</span>
            <div className="gender-form">
                <div style={{cursor: "pointer"}}>
                    <input type="radio" value="male" /> Male
                </div>
                <div style={{cursor: "pointer"}}>
                    <input type="radio" value="female"/> Female
                </div>
            </div>

            <div className="location-form">
                <div className="country-block">
                <span>Country</span>
                <br/>
                    <select className="about-input" name="country">
                        <option>USA</option>
                        <option>Uzbekistan</option>
                        <option>Russia</option>
                    </select>
                <br/>
                <span>Address</span>
                <br/>
                <input className="about-input" type={"text"} placeholder={"Address..."}/>
                </div>

                <div className="city-block">
                <span>City</span>
                <br/>
                    <select className="about-input" name="city">
                        <option>New York</option>
                        <option>New York</option>
                        <option>Tashkent</option>
                        <option>Moscow</option>
                    </select>
                <br/>
                <span>Post Code</span>
                <br/>
                <input className="about-input" type={"text"} placeholder={"Post Code..."}/>
                </div>
            </div>
            <div className={"saveButton"}>
                <button type="button">Save</button>
            </div>
        </div>
    );
};

export default AboutSettings;