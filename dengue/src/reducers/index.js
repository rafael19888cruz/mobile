import { combineReducers} from 'redux';
import userReducer from './userReducer';
import Novoform from './Novoform';
import clienteReducer from './clienteReducer';


export default combineReducers({
    user: userReducer,
    clientesForm: Novoform,
    listaclientes: clienteReducer
});