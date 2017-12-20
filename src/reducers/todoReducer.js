import {
    TODO_CREATE, TODO_CREATE_LOADING, TODO_CREATE_ERROR,
    TODO_UPDATE, TODO_UPDATE_LOADING, TODO_UPDATE_ERROR,
    TODO_DELETE, TODO_DELETE_LOADING, TODO_DELETE_ERROR,
    TODO_GET, TODO_GET_LOADING, TODO_GET_ERROR, TODO_CHECK, TODO_CHECK_LOADING, TODO_CHECK_ERROR
} from "../constants/actionTypes";


function todoReducer (state={todos:{}, isLoading:false, isError: false, id: 0}, action) {
    console.log(state);
    switch (action.type) {
        case TODO_CREATE:
            return Object.assign({}, state, {
                isError: false,
                isLoading: false,
                id: state.id+1
            });
        case TODO_CREATE_LOADING:
            return Object.assign({}, state, {
                isError: false,
                isLoading: true,
            });
        case TODO_CREATE_ERROR:
            return Object.assign({}, state, {
                error: action.payload,
                isError: true,
                isLoading: false,
            });
        case TODO_UPDATE:
            return Object.assign({},state,{
                isError: false,
                isLoading: false,
            });
        case TODO_UPDATE_LOADING:
            return Object.assign({},state,{
                isError: false,
                isLoading: true,
            });
        case TODO_UPDATE_ERROR:
            return Object.assign({},state,{
                isError: true,
                isLoading: false,
                error: action.payload,
            });
        case TODO_DELETE:
            return Object.assign({},state,{
                isError: false,
                isLoading: false,
            });
        case TODO_DELETE_LOADING:
            return Object.assign({},state,{
                isError: false,
                isLoading: true,
            });
        case TODO_DELETE_ERROR:
            return Object.assign({},state,{
                isError: true,
                isLoading: false,
                error: action.payload,
            });
        case TODO_GET:
            return Object.assign({},state,{
                todos: action.payload,
                isError: false,
                isLoading: false,
            });
        case TODO_GET_LOADING:
            return Object.assign({},state,{
                isError: false,
                isLoading: true,
            });

        case TODO_GET_ERROR:
            return Object.assign({},state,{
                isError:true,
                isLoading:false,
                error:action.payload
            });
        case TODO_CHECK:
            return Object.assign({},state,{
               isError:false,
               isLoading:false
            });
        case TODO_CHECK_LOADING:
            return Object.assign({},state,{
                isError:false,
                isLoading:true
            });
        case TODO_CHECK_ERROR:
            return Object.assign({},state,{
                isError:true,
                isLoading:false,
                error:action.payload
            });
        default:
            return state;
    }
}
export default todoReducer;