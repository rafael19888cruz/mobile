import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    KeyboardAvoidingView,
    Image,
    TextInput,
    Button,
    ActivityIndicator,
    Alert,
} from 'react-native';


import FormRow from '../components/FormRow';
import firebase from 'firebase';
import {logando} from '../actions';
import { connect } from 'react-redux';

///////////////////////////////////TELA DE LOGIN//////////////////////////////////

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            senha: "",
            isLoading: false,
            message: "",
        }
    }
    //====================================COMUNICAÇÃO COM FARIBASE
    componentDidMount() {
        var firebaseConfig = {
            apiKey: "AIzaSyDAJZNtGaRw8NmRHothzQ0DVAf7z7C7JBo",
            authDomain: "dengueprojet.firebaseapp.com",
            databaseURL: "https://dengueprojet.firebaseio.com",
            projectId: "dengueprojet",
            storageBucket: "dengueprojet.appspot.com",
            messagingSenderId: "121562103268",
            appId: "1:121562103268:web:e2e4458de5b7813e2e5bf1",
            measurementId: "G-8TLLE1H6WK"
        };
        if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
        }
    }

    onChangeHander(field, valor) {
        this.setState({
            [field]: valor
        })
    }

    //======================================FUNÇÃO DE ATENTICAÇÃO COM FIREBASE
    logando() {
        this.setState({ isLoading: true });

        const { email, senha } = this.state;

       this.props.logando({email, senha})
       .then( ()  => {
           this.props.navigation.navigate('cadastro');
       })

      // .catch( user => {
        //   this.setState({message: error.code});
       //})
    }

    //======================================FUNÇÃO DE TRADUÇÃO DE ERROS
    msgptbr(code) {
        switch (code) {
            case "auth/user-not-found":
                return "E-mail não existe";
            case "auth/wrong-password":
                return "Senha incorreta";
            default:
                return "Erro desconhecido";
        }
    }

    //=======================================FUNÇÃO DA ANIMAÇÃO DE LOGIN
    estadobotao() {
        if (this.state.isLoading)
            return <ActivityIndicator />

        return (
            <Button
                title="Entrar"
                onPress={() => this.logando()}
            />
        );
    }

    //=====================================FUNÇÃO DA MENSAGEM DE ERRO
    msgerro() {
        const { message } = this.state;

        if (!message)
            return null;

        return (
            <View>
                <Text>{message}</Text>
            </View>
        );

    }

    //=====================================fUNÇÃO DE RENDERISAçÃo A TELA DO LOGIN
    render() {
        return (
            <View style={styles.background}>

                <View style={styles.logocontainer}>
                    <Image
                        style={styles.logo}
                        source={require('../image/den3.png')}
                    />
                </View>
                <KeyboardAvoidingView>
                    <FormRow>
                        <TextInput
                            placeholderTextColor="#3337"
                            style={styles.input}
                            placeholder="Email"
                            value={this.state.email}
                            onChangeText={valor => {
                                this.onChangeHander('email', valor)
                            }}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </FormRow>

                    <FormRow>
                        <TextInput
                            placeholderTextColor="#3337"
                            style={styles.input}
                            placeholder="Senha"
                            value={this.state.senha}
                            onChangeText={valor => {
                                this.onChangeHander('senha', valor)
                            }}
                        />
                    </FormRow>
                </KeyboardAvoidingView>

                {this.estadobotao()}
                {this.msgerro()}


            </View>

        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#D2FFFF',
    },
    logocontainer: {
        paddingTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 230,
        height: 230,
    },
    input: {
        backgroundColor: '#FFF',
        width: '90%',
        marginBottom: 15,
        color: '#333',
        fontSize: 17,
        borderRadius: 7,
        padding: 20,
    },
});

export default connect(null,{logando})(Login);