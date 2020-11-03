import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Button,
  Alert,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  ScrollView

} from 'react-native';

//import CameraRollPicker from 'react-native-camera-roll-picker';
import ImgToBase64 from 'react-native-image-base64';
import FormRow from '../components/FormRow';
import { connect } from 'react-redux';
import { setField, salvaCliente, setAllFields, resetForm } from '../actions';
import { RNCamera } from 'react-native-camera';

class Cadastro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCamera: false,
      isCameraRoll: false
    }
  }

  viewGaleria() {
    this.requestExternalStoregeAcess();

    return (
      <CameraRollPicker
        maximun={1}
        selectSingleItem={true}
        callback={(volta) => {
          if (volta.length > 0) {
            console.log(volta);
            ImgToBase64.getBase64String(volta[0].uri)
              .then(stringConvertida => {
                this.props.setField('', stringConvertida)
              })
              .catch(err => {
                console.log(err)
              })
          }
          this.setState({
            isCameraRoll: false,
          })
        }}
      />
    );
  }


  async requestExternalStoregeAcess() {
    try {
      const permission = await PermissionsAndroid
        .request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);

      if (permission !== PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert('Negado');
      }
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount() {


    const { navigation, setAllFields, resetForm, clienteEdit, pessoas } = this.props;
    //const {pessoas} = navigation.state;

    if (pessoas && pessoas.clienteEdit) {
      setAllFields(pessoas.clienteEdit)
    } else {
      resetForm();
    }
  }

  viewCamera() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;

          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Conceder permissão',
            message: 'Permitir o uso da camera',
            buttonPositive: 'Aceitar',
            buttonnegativo: 'Cancelar'
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permitir audio',
            message: 'Permitir audio para video',
            buttonPositive: 'Aceitar',
            buttonnegativo: 'Cancelar'
          }}
        />

        <View>
          <TouchableOpacity
            style={styles.capture}
            onPress={this.takePicture.bind(this)}>
            <Text>Capturar</Text>

          </TouchableOpacity>
        </View>
      </View>
    )
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true, forceUpOrientation: true, fixOrientation: true };
      const data = await this.camera.takePictureAsync(options);

      if (data) {
        this.props.setField('img', data.base64);

        this.setState({
          isCamera: false
        })
      }
    }
  }

  viewForm() {
    const { clientesForm, setField, salvaCliente, navigation } = this.props;

    return (

      <View style={styles.background}>
        <ScrollView>
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
                }} />
              <TextInput
                placeholderTextColor="#3337"
                style={styles.input}
                placeholder="Qntd de focos"
                value={clientesForm.focos}
                onChangeText={value => setField('focos', value)}
              />
              <TextInput
                placeholderTextColor="#3337"
                style={styles.input}
                placeholder="Descrição"
                value={clientesForm.descricao}
                onChangeText={value => setField('descricao', value)}
              />
              <View style={styles.submitbutton_cadastro}>
                {
                  clientesForm.img ?
                    <Image
                      source={{ uri: `data:image/jpeg;base64,${clientesForm.img}` }}
                      style={styles.img}
                    />
                    : null
                }
                <Button
                  title='captutar focos'
                  onPress={() => {
                    Alert.alert(
                      'Capturar focos',
                      'Como deseja caopturar os focos ?',
                      [
                        {
                          text: 'Camera',
                          onPress: () => {
                            this.setState({
                              isCamera: true,
                            })
                          }
                        },
                        {
                          text: 'galeria',
                          onPress: () => {
                            this.setState({
                              isCameraRoll: true,
                            })
                          }

                        }
                      ]
                    )
                  }}
                />

              </View>
            </KeyboardAvoidingView>
          </FormRow>
          <View style={styles.submitbutton_cadastro}>
            <Button
              title="Cadastrar"
              color='green'
              onPress={() => {
                salvaCliente(clientesForm);
                navigation.navigate('Listagem');
              }} />
          </View>
          <View style={styles.submitbutton_cadastro}>
            <Button

              title="listar"
              color='green'
              onPress={() => {
                navigation.navigate('Listagem');
              }}
            />
          </View>
        </ScrollView>
      </View>

    );
  }
  render() {
    if (this.state.isCameraRoll) {
      return (this.viewCamera())
    }

    if (this.state.isCamera) {
      return (this.viewCamera())
    }


    return (this.viewForm())
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#D2FFFF',
  },
  img: {
    aspectRatio: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
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
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20

  }

});

const mapStateToProps = (state) => {
  return ({
    clientesForm: state.clientesForm
  })
}

const mapDispatchToProps = {
  setField,
  salvaCliente,
  setAllFields,
  resetForm
}

export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);