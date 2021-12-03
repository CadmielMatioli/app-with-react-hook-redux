import { createStore } from 'redux';

const INITIAL_STATE = {
    data : [
        'Lavadera de loça'
    ]
}

export default function storeMarket(state = INITIAL_STATE, action){
    switch(action.type){
        case 'ADD_ITEM':
            return {...state, data: [...state.data, action.title] };
        default:
            return state;
    }
}
