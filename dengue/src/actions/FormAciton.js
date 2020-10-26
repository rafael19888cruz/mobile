import firebase from 'firebase';
import { Alert } from 'react-native';

export const SET_FIELD = 'SET_FIELD';

export const setField = (field, valu) => {
    return {
        type: SET_FIELD,
        field: field,
        valu: valu
    }
}

export const SET_ALL_FIELDS = 'SET_ALL_FIELDS';
export const setAllFields = cliente => ({
        type: SET_ALL_FIELDS,
        cliente: cliente
    });

export const RESET_FORM = 'RESET_FORM';
export const resetForm = () => ({
    type: RESET_FORM
})


export const salvaCliente = clientnovo => {
    const { currentUser } = firebase.auth();

    return async dispatch => {
        if(clientnovo.id){
            firebase
            .database()
            .ref(`users/${currentUser.uid}/cliente/${clientnovo.id}`)
            .set(clientnovo);


        }else{
            await firebase
            .database()
            .ref(`users/${currentUser.uid}/cliente`)
            .push(clientnovo);

        }
    }  
}