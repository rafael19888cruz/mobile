import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import login from './telas/Login';
import Listagem from './telas/Listagem';
import ClientesDetails from './telas/ClientesDetails';
import Cadastro from './telas/Cadastro';


const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="cadastro" component={Cadastro} />
        <Stack.Screen name="Listagem" component={Listagem} />
        <Stack.Screen name='Detalhes de Usuários' component={ClientesDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;