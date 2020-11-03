import React from 'react';
import { NavigationContainer, navigationOptions } from '@react-navigation/native';
//import { createStackNavigator, } from '@react-navigation/stack';
import login from './telas/Login';
import Listagem from './telas/Listagem';
import ClientesDetails from './telas/ClientesDetails';
import Cadastro from './telas/Cadastro';
import ClienteList from './components/ClienteList';

import { createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
  
function Router(){
  return(
    <NavigationContainer>
    <Stack.Navigator 
    initialRouteName = "Login"
        >
        <Stack.Screen
        name = "Login"
        component={login}
        options={{title: 'Bem Vindo' }}
        />
        <Stack.Screen
        name = "cadastro"
        component={Cadastro}
        options={{title: 'Cadastro de Usuários'}}
        />
        <Stack.Screen
        name="Listagem"
        component={Listagem}
        options={{title: 'Listagem de usuários'}}
        />
        </Stack.Navigator>
        </NavigationContainer>

  );
}

export default Router;


/*const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="cadastro" component={Cadastro} />
        <Stack.Screen name="Listagem" component={Listagem} />
        <Stack.Screen name='Detalhes de Usuários' component={ClientesDetails}/>
        <Stack.Screen name='clientlist' component={ClienteList}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Router;*/