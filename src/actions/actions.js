import {
    TODO_CHECK,
    TODO_CHECK_ERROR,
    TODO_CHECK_LOADING,
    TODO_CREATE, TODO_CREATE_ERROR, TODO_CREATE_LOADING, TODO_DELETE, TODO_DELETE_ERROR, TODO_DELETE_LOADING, TODO_GET,
    TODO_GET_ERROR,
    TODO_GET_LOADING,
    TODO_UPDATE,
    TODO_UPDATE_ERROR,
    TODO_UPDATE_LOADING
} from "../constants/actionTypes";

export function todoCreate(todo) {
    return function (dispatch) {
        try {
            dispatch(todoCreateLoading());
            let todos = JSON.parse(localStorage.getItem('todos')) || [];
            todos.push(todo);
            localStorage.setItem('todos', JSON.stringify(todos));
            dispatch(todoCreateSuccess(todo.id+1));
            dispatch(todoGet());
        } catch(e) {
            dispatch(todoCreateError(e.message));
        }
    }
}

export function todoCreateSuccess(id) {
    return {
        type: TODO_CREATE,
        payload: id
    }
}

export function todoCreateLoading() {
    return {type: TODO_CREATE_LOADING}
}

export function todoCreateError(error) {
    return {
        type: TODO_CREATE_ERROR,
        payload: error
    }
}

export function todoUpdate(todo) {
    return function (dispatch) {
        try {
            dispatch(todoUpdateLoading());
            let todos = JSON.parse(localStorage.getItem('todos')) || [];
            let foundIndex = todos.findIndex(x => x.id == todo.id);
            if(foundIndex!=-1) todos[foundIndex] = todo;
            localStorage.setItem('todos', JSON.stringify(todos));
            dispatch(todoUpdateSuccess());
            dispatch(todoGet());
        } catch(e) {
            dispatch(todoUpdateError(e.message));
        }
    }
}

export function todoUpdateSuccess() {
    return {type: TODO_UPDATE}
}

export function todoUpdateLoading() {
    return {type: TODO_UPDATE_LOADING}
}

export function todoUpdateError(error) {
    return {
        type: TODO_UPDATE_ERROR,
        payload: error
    }
}

export function todoGet() {
    return function(dispatch) {
        try {
            dispatch(todoGetLoading());
            let todos = JSON.parse(localStorage.getItem('todos')) || [];
            dispatch(todoGetSuccess(todos));
        } catch(e) {
            dispatch(todoGetError(e.message));
        }
    }

}

export function todoGetSuccess(todos) {
    return {
        type: TODO_GET,
        payload: todos,
    }
}

export function todoGetLoading() {
    return {type: TODO_GET_LOADING}
}

export function todoGetError(error) {
    return {
        type: TODO_GET_ERROR,
        payload: error
    }
}

export function todoDelete(id) {
    return function(dispatch) {
        try {
            dispatch(todoDeleteLoading());
            let todos = JSON.parse(localStorage.getItem('todos')) || [];
            todos.splice(todos.findIndex(x => x.id === id),1);
            localStorage.setItem('todos', JSON.stringify(todos));
            dispatch(todoDeleteSuccess(id-1));
            dispatch(todoGet());
        } catch(e) {
            dispatch(todoDeleteError(e.message));
        }
    }
}

export function todoDeleteSuccess(id) {
    return {
        type: TODO_DELETE,
        payload: id
    }
}

export function todoDeleteLoading() {
    return {type: TODO_DELETE_LOADING}
}

export function todoDeleteError(error) {
    return {
        type: TODO_DELETE_ERROR,
        payload: error
    }
}

export function todoCheck(id) {
    return function(dispatch) {
        try {
            dispatch(todoCheckLoading());
            let todos = JSON.parse(localStorage.getItem('todos')) || [];
            let foundIndex = todos.findIndex(x => x.id === id);
            if(foundIndex!==-1){
                todos[foundIndex].checked = !todos[foundIndex].checked;
                if(todos[foundIndex].datePerform) todos[foundIndex].datePerform = "";
                else todos[foundIndex].datePerform = new Date().toLocaleString();
            }
            localStorage.setItem('todos', JSON.stringify(todos));
            dispatch(todoCheckSuccess());
            dispatch(todoGet());
        } catch(e) {
            dispatch(todoCheckError(e.message));
        }
    }

}

export function todoCheckSuccess() {
    return {type: TODO_CHECK}
}

export function todoCheckLoading() {
    return {type: TODO_CHECK_LOADING}
}
export function todoCheckError(error) {
    return {
        type: TODO_CHECK_ERROR,
        payload: error
    }
}