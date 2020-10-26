import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Line from '../components/Line';
import clientes from '../telas/Listagem';
import {connect} from 'react-redux';
import {deletCliente} from '../actions';

class ClientesDetails extends React.Component {
    render() {
        return (
            <View>
                <Line label="Nome :" content={clientes.nome} />
                <Line label="Endereço :" content={clientes.endereco} />
                <Line label="Quantidade de focos :" content={clientes.focos} />


                <View style={styles.button}>
                    <Button
                        title="Editar"
                        color='green'
                        onPress={() => {
                            this.props.navigation.replace('cadastro', { clienteEdit: clientes });
                        }}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title="Excluir"
                        color="#FF0004"
                        onPress={ async () => {
                            const deletado = await this.props.deletCliente(clientes)

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

export default connect(null,{deletCliente: deletCliente})(ClientesDetails);