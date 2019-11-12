import {CHANGE_FLAG, CURRENT_SETTING} from "../actions/actionTypes";


const initialState =  {
    flag : true,
    currentSetting: false
}



export default function rootReducer(state=initialState, action) {
    switch (action.type) {
        case CHANGE_FLAG:
            return {...state, flag: !state.flag}


        case CURRENT_SETTING:
            console.log("clicked");
            return  {...state, currentSetting: true}


        default:
            return state;

    }

};