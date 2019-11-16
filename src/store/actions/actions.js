import {CHANGE_FLAG , CURRENT_SETTING} from "./actionTypes";


export const changeFlag = () => {
    return {
        type: CHANGE_FLAG
    }
}

export const currentSetting = (payload) => {
    console.log(payload)
    return {
        type: CURRENT_SETTING,
        payload
    }
}