import {SET_FIELD, SET_ALL_FIELDS, RESET_FORM} from '../actions';

const INICIAL_STATE = {
    id:null,
    nome: '',
    endereco: '',
    focos: ''
}

export default function(state = INICIAL_STATE, action){
    switch(action.type){
        case SET_FIELD:
            const clonedState = {...state};
            clonedState[action.field] = action.valu;
            return clonedState;
        case SET_ALL_FIELDS:
            return  action.cliente;
        case RESET_FORM:
            return INICIAL_STATE;

        
        default:

        return state;
    }
}