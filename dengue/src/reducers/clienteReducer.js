import { SET_CLIENTE } from "../actions";

export default function(state = {}, action){
    switch(action.type) {
        case SET_CLIENTE:
            return action.clientes;
        default:
            return state;
    }

    return state;
}