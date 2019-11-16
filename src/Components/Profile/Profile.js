import React, {useEffect, useState} from 'react';
import "./Profile.css"
import ProfileContent from './ProfileContent';
import AboutSettings from "./AboutSettings";

function currentSetting(setting){
   if(setting==="profile"){
       console.log("true");
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
   }

}


const Profile = () => {
    const [setting, setSetting] = useState("profile");
    const [currentClass, setClass] = useState("nonactive-setting")

    // useEffect(() => {
    //     if(setting === "profile")
    //
    // });

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
                        <button>Security</button>
                        <button>Skills</button>
                        <button>Type of payment</button>
                        <button>Delete Account</button>
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

