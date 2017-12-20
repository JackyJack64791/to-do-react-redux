import {createStore, applyMiddleware} from 'redux';
import rootReducer from "./reducers/rootReducer";
import thunkMiddleware from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const Store = createStoreWithMiddleware(rootReducer);

export default Store;