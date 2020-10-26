import {SET_FIELD, SET_ALL_FIELDS} from '../actions';

const INICIAL_STATE = {
    nome: '',
    endereco: '',
    focos: 0
}

export default function(state = INICIAL_STATE, action){
    switch(action.type){
        case SET_FIELD:
            const clonedState = {...state};
            clonedState[action.field] = action.valu;
            return clonedState;
        case SET_ALL_FIELDS:
        return  action.cliente;

        
        default:

        return state;
    }
}