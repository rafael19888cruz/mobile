import firebase from 'firebase';
import {Alert} from 'react-native';

export const SET_CLIENTE = 'SET_CLIENTE';
const setClientes = clientes => ({
    type: SET_CLIENTE,
    clientes: clientes
})

export const watchClientes=() => {
    const {currentUser} = firebase.auth();

    return dispatch => {
        firebase
        .database()
        .ref(`/users/${currentUser.uid}/cliente`)
        .on('value',snapshot => {
            const clientes = snapshot.val();
            const action = setClientes(clientes);
            dispatch(action);
            

        });
    }
}
export const deletCliente = clientes =>{
    return dispatch =>{
        return new Promise((resolve, reject) => {
            Alert.alert(
            'Exclusão',
            `Excluir ${clientes.nome}?`,
            [{
                text: 'Não',
                onPress: () =>{
                    resolve(false);
                }
               
                },{
                    text: 'Sim',
                    onPress: async () =>{
                        const { currentUser } = firebase.auth();
                    
                        try{
                   await firebase
                        .database()
                        .ref(`/users/${currentUser.uid}/cliente/${clientes.id}`)
                        .remove();

                    resolve(true);
                    }catch(e){
                        reject(e);
                    }
                    }
                }            
           
        ],
            { cancelable: false}
            )
        })
    }
}