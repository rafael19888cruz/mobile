import React from 'react';
import { View, Button} from 'react-native';
import Line from '../components/Line';
import client from '../telas/Listagem';

export default  class ClientesDetails extends React.Component{
    render(){
        return(
            <View>
                <Line label="Nome :"                content={client.nome}/>
                <Line label="Endereço :"            content={client.endereco}/>
                <Line label="Quantidade de focos :" content={client.focos}/>
                <Button
                title="Editar"
                onPress={() => {
                    this.props.navigation.replace('cadastro',{clienteEdit: client});
                }}
                />

            </View>
        );
    }

}