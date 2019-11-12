import React from 'react';
import "./ProfileContent.css";
import {ProfilePhoto, Edit, Remove} from '../../assets/icons/svg';




const ProfileContent = () => {
    return (
        <div className={"profile-content"}>
            <h3 style={{marginLeft: "2.5rem", marginTop: "3rem"}}>Profile</h3>
            <h5 style={{marginLeft: "2.5rem", marginTop: "1rem"}}>Profile Photo</h5>
            <div className="profile-photo">
                <div className="photo">
                    <ProfilePhoto/>
                </div>
                <div className="photo-edit">
                    <Remove/>
                    <Edit/>
                </div>
            </div>
            <form >
                <div className="profile-forms">
                    <div style={{width: "50%"}}>
                        <span>Name</span>
                        <input
                            className="profile-inputs"
                            autoFocus
                            name="name"
                            type="text"
                            placeholder="Name..."
                        />
                        <span>Username</span>
                        <input
                            className="profile-inputs"
                            name="username"
                            type="text"
                            placeholder="Username..."
                        />
                        <span>Phone Number</span>
                        <input
                            className="profile-inputs"
                            name="phone"
                            type="text"
                            placeholder="Phone number..."
                        />
                    </div>
                    <div style={{width: "50%"}}>
                        <span>Second Name</span>
                        <input
                            className="profile-inputs"
                            name="secondname"
                            type="text"
                            placeholder="Second name..."
                        />
                        <span>Email Address</span>
                        <input
                            className="profile-inputs"
                            name="email"
                            type="email"
                            placeholder="Email..."
                        />
                    </div>
                </div>
                <div className="profile-footer">
                    <span>About yourself</span>
                    <br/>
                    <textarea
                    className="profile-textarea"
                    name="about">

                    </textarea>
                    <br/>
                    <span>Password</span>
                    <br/>
                    <input
                        className="profile-inputs"
                        name="pin"
                        type="text"
                        placeholder="Password..."
                    />
                    <br/>
                    <input
                        className="save-button"
                        type="submit"
                        name="saveButton"
                        value="Save"
                    />
                </div>
            </form>
        </div>
    );
};

export default ProfileContent;