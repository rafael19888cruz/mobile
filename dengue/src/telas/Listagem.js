import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import clientes from '../../clientes.json';
import ClienteList from '../components/ClienteList';

const Listagem = props => (
    <View style={styles.container_list}>
        <FlatList
            data={clientes}
            renderItem={({ item }) => {
                return (
                   <ClienteList 
                   client={item}
                   onNavigate={()=>props.navigation.navigate('Detalhes de Usuários', {clientes: item})}
                   />
                );
            }}
            keyExtractor= {item => item.id.toString()}        />

    </View>
)

const styles = StyleSheet.create({
    container_list: {
        flex: 1,
        paddingTop: 22
      }
});

export default Listagem;