import { combineReducers} from 'redux';
import userReducer from './userReducer';
import Novoform from './Novoform';


export default combineReducers({
    user: userReducer,
    clientesForm: Novoform
});