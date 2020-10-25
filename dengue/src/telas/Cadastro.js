import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Button,
  Alert,

} from 'react-native';

import FormRow from '../components/FormRow';
import { connect } from 'react-redux';
import { setField, salvaCliente } from '../actions';

const Cadastro = ({ clientesForm, setField, salvaCliente, navigation}) => (
  <View style={styles.background}>
    <FormRow>
      <KeyboardAvoidingView>

        <TextInput
          placeholderTextColor="#3337"
          style={styles.input}
          placeholder="Nome"
          value={clientesForm.nome}
          onChangeText={value => setField(value)}
        />
        <TextInput
          placeholderTextColor="#3337"
          style={styles.input}
          placeholder="Endereço"
          value={clientesForm.endereco}
          onChangeText={value => setField('endereco', value)}
        />
        <TextInput
          placeholderTextColor="#3337"
          style={styles.input}
          placeholder="Qntd de focos"
          value={clientesForm.focos}
          onChangeText={value => setField('focos', value)}
        />
      </KeyboardAvoidingView>

      <View style={styles.submitbutton_cadastro}>
       
       <Button
          title="Cadastrar"
          onPress={() => {
           try{
               salvaCliente(clientesForm);
            }catch(error){
              Alert.alert('Erro: ', error.message);
            }
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
    </FormRow>
  </View>
);


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
  salvaCliente
}

export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);