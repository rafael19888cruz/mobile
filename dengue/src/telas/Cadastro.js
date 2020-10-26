import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Button

} from 'react-native';

import FormRow from '../components/FormRow';
import { connect } from 'react-redux';
import { setField, salvaCliente, setAllFields} from '../actions';

class Cadastro extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
   const {navigation, setAllFields} = this.props;
   const {params} = navigation.state;

   if(params && params.clienteEdit){
     setAllFields(params.clienteEdit)
   }
  }

  render() {
    const { clientesForm, setField, salvaCliente, navigation } = this.props;

    return (
      <View style={styles.background}>
        <FormRow>
          <KeyboardAvoidingView>

            <TextInput
              placeholderTextColor="#3337"
              style={styles.input}
              placeholder="Nome"
              value={clientesForm.nome}
              onChangeText={valu => {
                setField('nome', valu)
              }}
              />

            <TextInput
              placeholderTextColor="#3337"
              style={styles.input}
              placeholder="Endereço"
              value={clientesForm.endereco}
              onChangeText={valu => {
                setField('endereco', valu)
              }}/>

            <TextInput
              placeholderTextColor="#3337"
              style={styles.input}
              placeholder="Qntd de focos"
              value={clientesForm.focos}
              onChangeText={value => setField('focos', value)}
            />
          </KeyboardAvoidingView>
        </FormRow>
        <View style={styles.submitbutton_cadastro}>
          <Button
            title="Cadastrar"
            onPress={() => {
              salvaCliente(clientesForm);
            }} />
        </View>
        <View style={styles.submitbutton_cadastro}>
          <Button

            title="listar"
            onPress={() => {
              navigation.navigate('Listagem');
            }}
          />
        </View>
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
  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#333',
    fontSize: 17,
    borderRadius: 7,
    padding: 5,
  },
  submitbutton_cadastro: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    borderRadius: 7,
  },
  submittext: {
    color: '#FFF',
    fontSize: 18,
  },

});

const mapStateToProps = (state) => {
  return ({
    clientesForm: state.clientesForm
  })
}

const mapDispatchToProps = {
  setField,
  salvaCliente,
  setAllFields
}

export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);