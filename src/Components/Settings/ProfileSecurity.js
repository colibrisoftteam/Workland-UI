import React from 'react';
import './ProfileSecurity.css';

const ProfileSecurity = () => {
    return (
        <div>
            <h3 className="security-title">Security</h3>
            <h5 style={{marginLeft: "2.5rem"}}>Change Password</h5>
            <div className="security-pin">
                <span>Current Password</span>
                <input
                className="security-input"
                type="password"
                placeholder="Current pin..."/>
                <span>New Password</span>
                <input
                className="security-input"
                type="password"
                placeholder="New pin..."/>
                <span>Confirm Password</span>
                <input
                className="security-input"
                type="password"
                placeholder="Confirm pin..."/>
                <button
                className="security-button"
                type="button">
                    Save
                </button>
            </div>
            <div className="double-auth">
                <h3  style={{marginBottom: "1.5rem"}}>Double Authentication</h3>
                <span style={{marginBottom: "1rem"}}>Phone Number Connection</span>
                <input type="text"  className="security-input" placeholder="Phone number..."/>
                <button className="security-button" type="button">Connection</button>
            </div>
        </div>
    );
};

export default ProfileSecurity;