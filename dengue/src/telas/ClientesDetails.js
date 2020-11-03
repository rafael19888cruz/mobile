import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default class ClientesDetails extends React.Component {
    render() {
        return(
            <Text> Nova seire</Text>
        );
    }
}


/*import Line from '../components/Line';
import LongText from '../components/LongText';
import {connect} from 'react-redux';
import {deletCliente} from '../actions';


class ClientesDetails extends Component {
    constructor(props) {
        super(props);
   
    }
  render() {
       const { pessoas } = this.props;
        return (
            <View>
            <Line label="Nome :" content={pessoas.nome} />
                <Line label="Endereço :" content={pessoas.endereco} />
                <Line label="Quantidade de focos :" content={pessoas.focos} />
                <LongText label="Descrição :" content={pessoas.descricao} />


                <View style={styles.button}>
                    <Button
                        title="Editar"
                        color='green'
                        onPress={() => {
                        this.props.navigation.replace('cadastro', { clienteEdit: pessoas });
                        }}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title="Excluir"
                        color="#FF0004"
                        onPress={ async () => {
                            const deletado = await this.props.deletCliente(pessoas)

                            if(deletado) {
                                this.props.navigation.goBack();
                            }
                        }}
                    />
                </View>


            </View>
        );
                    }
                }
const styles = StyleSheet.create({
    button: {
        margin: 10
    }
});

export default connect(null,{deletCliente: deletCliente})(ClientesDetails);*/