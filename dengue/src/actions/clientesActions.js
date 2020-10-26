import firebase from 'firebase';

export const SET_CLIENTE = 'SET_CLIENTE';
const setClientes = clientes => ({
    type: SET_CLIENTE,
    clientes: clientes
})

export const watchClientes = () => {
    const {currentUser} = firebase.auth();

    return dispatch => {
        firebase
        .database()
        .ref(`/users/${currentUser.uid}/cliente`)
        .on('value',snapshot => {
            const clientes = snapshot.val();
            const action = setClientes(clientes);
            dispatch(action);
            

        })
    }
}