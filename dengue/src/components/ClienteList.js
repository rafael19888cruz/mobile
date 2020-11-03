import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Button, Image } from 'react-native';
import Line from '../components/Line';
import LongText from '../components/LongText';
import { connect } from 'react-redux';
import { deletCliente } from '../actions';


class ClienteList extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        const { pessoas } = this.props;
        return (
            <ScrollView>
                <TouchableOpacity style={styles.row}>
                    <View style={styles.viu}>
                        <Image
                            style={styles.imagem}
                            source={
                                {
                                    uri: `data:image/jpeg;base64,${pessoas.img}`
                                }
                            }
                        />
                    </View>
                    <View style={styles.container}>
                        <View style={styles.line} >
                            <Line label="Nome :" content={pessoas.nome} />
                            <Line label="Endereço :" content={pessoas.endereco} />
                            <Line label="Quantidade de focos :" content={pessoas.focos} />
                        </View>
                    </View>
                </TouchableOpacity>
                <LongText label="Descrição :" content={pessoas.descricao} />

                <View style={styles.button}>
                    <Button
                        title="Editar"
                        color='green'
                        onPress={() => {
                            this.props.navigation.navigate('cadastro', { clienteEdit: pessoas })
                        }}

                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title="Excluir"
                        color="#FF0004"
                        onPress={async () => {
                            const deletado = await this.props.deletCliente(pessoas)

                            if (deletado) {
                                this.props.navigation.goBack();
                            }
                        }}
                    />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        margin: 10
    },
    container: {
        flex: 1,
        margin: 15,
        borderColor: 'red'
    },
    line: {
        flex: 1,
        marginLeft: 1,
        justifyContent: 'flex-end'
    },
    viu: {
        flex: 0.3,
        alignItems: 'center',
        margin: 15
    },
    imagem: {
        width: 120,
        height: 120,
    },
    row: {
        flexDirection: "row"
    }
});


export default connect(null, { deletCliente: deletCliente })(ClienteList);