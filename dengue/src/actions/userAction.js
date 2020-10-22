import firebase from 'firebase';
import {Alert} from 'react-native';

export const USER_LOGIN_SUCESS = 'USER_LOGIN';
const userLoginSucess = user => ({
    type: USER_LOGIN_SUCESS,
    user
});

export const USER_LOGOUT = 'USER_LOGOUT';
const userLogout = () => ({
    type: USER_LOGOUT,
})



export const logando = ({email, senha}) => dispatch => {
    return firebase
    .auth()
    .signInWithEmailAndPassword(email, senha)
    .then(user => {
        const action = userLoginSucess(user);
        dispatch(action);
    })
    .catch(error => {
        if (error.code == "auth/user-not-found") {
            return new Promise((resolve, reject) =>{
                Alert.alert(
                    "usuário não encontrado",
                    "Criar novo usuário ?",
                    [{
                        text: 'Não',
                        onPress: () => {
                        
                        
                        }
                    }, {
                        text: 'Sim',
                        onPress: () => {
                            firebase
                                .auth()
                                .createUserWithEmailAndPassword(email, senha)
                                .then(resolve)
                                .catch(reject);
                        }
                    }],
                    { cancelable: true }
                );
            })
            
        }
        return Promise.reject(error);

    })
}