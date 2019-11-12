import React from 'react';
import "./Profile.css"
import { useDispatch, useSelector } from 'react-redux'
import {CURRENT_SETTING} from "../../store/actions/actionTypes";
import ProfileContent from './ProfileContent';

const Profile = () => {
    const dispatch = useDispatch();
    const currentSetting = useSelector(state => state.currentSetting)
    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col col-lg-3">
                    <div className="settings-panel">
                        <button
                            onClick={() => dispatch({type: CURRENT_SETTING})}
                            className={currentSetting ? "active-setting" : "unactive-setting"}>
                            Profile
                        </button>
                        <button>Settings About</button>
                        <button>Security</button>
                        <button>Skills</button>
                        <button>Type of payment</button>
                        <button>Delete Account</button>
                    </div>
                </div>
                <div className="col col-lg-9">
                    <ProfileContent/>
                </div>
            </div>
        </div>
    );
};

export default Profile;