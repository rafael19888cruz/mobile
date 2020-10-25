import {SET_FIELD} from '../actions';

const INICIAL_STATE = {
    nome: '',
    endereco: '',
    focos: 0
}

export default function(state = {INICIAL_STATE}, action){
    switch(action.type){
        case SET_FIELD:
            const clonedState = {...state};
            clonedState[action.field] = action.value;
            return clonedState;

        default:

        return state;
    }
}