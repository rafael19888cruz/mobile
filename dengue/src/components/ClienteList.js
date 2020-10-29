import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Button } from 'react-native';
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

                <View style={styles.container}>
                    <Line label="Nome :" content={pessoas.nome} />
                    <Line label="Endereço :" content={pessoas.endereco} />
                    <Line label="Quantidade de focos :" content={pessoas.focos} />
                    <LongText label="Descrição :" content={pessoas.descricao} />

                    <View style={styles.button}>
                        <Button
                            title="Editar"
                            color='green'
                            onPress={() => {
                                this.props.navigation.navigate('cadastro', { clienteEdit: pessoas });
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
        flex: 0.5,
        margin: 30,
        borderColor: "green"
    }
});


export default connect(null, { deletCliente: deletCliente })(ClienteList);