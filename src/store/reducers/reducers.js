import {CHANGE_FLAG, CURRENT_SETTING} from "../actions/actionTypes";


const initialState = {
    flag: true,
    profile: false,
    about: false,
    security: false,
    skills: false,
    payment: false,
    deleteAccount: false
}


export default function rootReducer(state=initialState, action) {
    switch (action.type) {
        case CHANGE_FLAG:
            return {...state, flag: !state.flag}


        case CURRENT_SETTING:
            return  false;


        default:
            return state;

    }

};