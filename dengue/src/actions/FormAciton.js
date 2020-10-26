import firebase from 'firebase';

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

export const salvaCliente = clientnovo => {
    const { currentUser } = firebase.auth();

     firebase
    .database()
    .ref(`users/${currentUser.uid}/cliente`)
    .push(clientnovo);

    
   
}