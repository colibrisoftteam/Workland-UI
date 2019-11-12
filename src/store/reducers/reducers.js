import {CHANGE_FLAG} from "../actions/actionTypes";


const initialState =  {
    flag : true
}



export default function rootReducer(state=initialState, action) {
    switch (action.type) {
        case CHANGE_FLAG:
            return {...state, flag: !action.payload}

        default:
            return state;

    }

};