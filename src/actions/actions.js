import {
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
        try {
            todoCreateLoading();
            let todos = JSON.parse(localStorage.getItem('todos')) || [];
            todos.push(todo);
            localStorage.setItem('todos', JSON.stringify(todos));
            todoCreateSuccess();
        } catch(e) {
            todoCreateError(e.message);
        }
}

export function todoCreateSuccess() {
    return {type: TODO_CREATE}
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
        try {
            todoUpdateLoading();
            let todos = JSON.parse(localStorage.getItem('todos')) || [];
            let foundIndex = todos.findIndex(x => x.id === todo.id);
            if(foundIndex) todos[foundIndex] = todo;
            localStorage.setItem('todos', JSON.stringify(todos));
            todoUpdateSuccess();
        } catch(e) {
            todoUpdateError(e.message);
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
        try {
            todoGetLoading();
            let todos = JSON.parse(localStorage.getItem('todos')) || [];
            todoGetSuccess(todos);
        } catch(e) {
            todoGetError(e.message);
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
        try {
            todoDeleteLoading();
            let todos = JSON.parse(localStorage.getItem('todos')) || [];
            todos.splice(todos.findIndex(x => x.id === id),1);
            localStorage.setItem('todos', JSON.stringify(todos));
            todoDeleteSuccess();
        } catch(e) {
            todoDeleteError(e.message);
        }
}

export function todoDeleteSuccess() {
    return {type: TODO_DELETE}
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

export function todoCheck() {
    try {
        todoCheckLoading();
        let todos = JSON.parse(localStorage.getItem('todos')) || [];
        let foundIndex = todos.findIndex(x => x.id === todo.id);
        if(foundIndex!==-1){
            todos[foundIndex].checked = true;
            todos[foundIndex].datePerform = new Date();
        }
        localStorage.setItem('todos', JSON.stringify(todos));
        todoCheckSuccess();
    } catch(e) {
        todoCheckError(e.message);
    }
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