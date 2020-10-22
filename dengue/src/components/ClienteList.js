import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


const ClienteList = ({ client, onNavigate}) => (
    <TouchableOpacity
    onPress={onNavigate}
    
    style={StyleSheet.container}>
        
        <View style = {styles.list}>
         <Text>{  `${client.id}   -   ${client.nome}` }</Text>
         </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flex: 1 ,
    },
    list: {
        flex:1,
        borderWidth: 1,
        padding: 10
    }
});

export default ClienteList;