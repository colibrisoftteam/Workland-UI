import {CHANGE_FLAG} from "./actionTypes";


export const changeFlag = () => {
    return {
        type: CHANGE_FLAG,
        payload:true
    }
}