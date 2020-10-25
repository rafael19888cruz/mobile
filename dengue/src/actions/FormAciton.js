import firebase from 'firebase';

export const SET_FIELD = 'SET_FIELD';

export const setField = (field, value) => {
    return {
        type: SET_FIELD,
        field,
        value
    }
}


export const salvaCliente = clientnovo => {
    const { currentUser } = firebase.auth();

     firebase
    .database()
    .ref(`users/${currentUser.uid}/cliente`)
    .push(clientnovo);

    
   
}