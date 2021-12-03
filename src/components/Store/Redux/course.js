import { createStore } from 'redux';

const INITIAL_STATE = {
    data : [
        'a'
    ]
}

export default function course(state = INITIAL_STATE, action){
    switch(action.type){
        case 'ADD_COURSE':
            return {...state, data: [...state.data, action.title] };
        default:
            return state;
    }
}
