import React, {useEffect, useState} from 'react';
import "./Profile.css"
import ProfileContent from './ProfileContent';
import AboutSettings from "./AboutSettings";
import ProfileSecurity from "./ProfileSecurity";
import ProfileSkills from "./ProfileSkills";
import ProfilePayment from "./ProfilePayment";
import DeleteAccount from "./DeleteAccount";

function currentSetting(setting){
   if(setting==="profile"){
       return (
           <div>
               <ProfileContent/>
           </div>
       )
   } else if(setting==="about") {
       return (
           <div>
              <AboutSettings/>
           </div>
       );
   } else if(setting==="security") {
       return (
           <div>
               <ProfileSecurity/>
           </div>
       );
   } else if(setting==="skills") {
       return (
           <div>
               <ProfileSkills/>
           </div>
       );
   } else if(setting==="payment") {
       return (
           <div>
               <ProfilePayment/>
           </div>
       );
   } else  {
       return (
           <div>
               <DeleteAccount/>
           </div>
       );
   }

}


const Profile = () => {
    const [setting, setSetting] = useState("profile");
    const [currentClass, setClass] = useState("nonactive-setting")

    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col col-lg-3">
                    <div className="settings-panel">
                        <div onClick={() => setSetting("profile")}>
                            <button
                            className={`${setting === "profile" ? "active-setting" : "nonactive-setting"}`}>
                                Profile
                            </button>
                        </div>
                        <div  onClick={() => setSetting("about")}>
                            <button
                            className={`${setting === "about" ? "active-setting" : "nonactive-setting"}`}>
                                Settings About
                            </button>
                        </div>
                        <div onClick={() => setSetting("security")}>
                            <button
                            className={`${setting === "security" ? "active-setting" : "nonactive-setting"}`}>
                                Security
                            </button>
                        </div>
                        <div onClick={() => setSetting("skills")}>
                            <button
                                className={`${setting === "skills" ? "active-setting" : "nonactive-setting"}`}>
                                Skills
                            </button>
                        </div>
                        <div onClick={() => setSetting("payment")}>
                            <button
                                className={`${setting === "payment" ? "active-setting" : "nonactive-setting"}`}>
                                Type of Payment
                            </button>
                        </div>
                        <div onClick={() => setSetting("delete")}>
                            <button
                                className={`${setting === "delete" ? "active-setting" : "nonactive-setting"}`}>
                                Delete Account
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-9">
                    {currentSetting(setting)}
                </div>
            </div>
        </div>
    );
};

export default Profile;

