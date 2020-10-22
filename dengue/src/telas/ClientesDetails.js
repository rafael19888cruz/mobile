import React from 'react';
import { View, Text} from 'react-native';
import Line from '../components/Line';
import clientes from '../../clientes.json';

export default  class Listagem extends React.Component{
    render(){
        return(
            <View>
                <Line label="Nome :" content={clientes.nome}/>
                <Line label="Endereço :" content={clientes.endereco}/>
                <Line label="Quantidade de focos :" content={clientes.focos}/>

            </View>
        );
    }
}