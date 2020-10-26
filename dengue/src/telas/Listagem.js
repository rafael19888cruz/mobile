import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import ClienteList from '../components/ClienteList';
import {connect} from 'react-redux';
import {watchClientes} from '../actions';

class Listagem extends React.Component{
    componentDidMount(){
        this.props.watchClientes();
    }
    render(){
        return(
            <View style={styles.container_list}>
                <FlatList
                    data={[...this.props.clientes]}
                    renderItem={({ item }) => {
                        return (
                           <ClienteList 
                           client={item}
                           onNavigate={()=> this.props.navigation.navigate('Detalhes de Usuários', {client: item})}
                           />
                        );
                    }}
                    keyExtractor= {item => item.id.toString()}        />
        
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container_list: {
        flex: 1,
        paddingTop: 22
      }
});

const mapStateToProps = state => {
    const {listaclientes} = state;

    const keys = Object.keys(listaclientes);
    const listId = keys.map(key => {
       return {...listaclientes[key], id: key}   
    })
    return{clientes: listId};

}

export default connect(mapStateToProps, {watchClientes})(Listagem);