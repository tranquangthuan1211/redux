
export const addTodo = (data) => {
    return {
        type: "ADD_TODO",
        payload: data
    }
}
export const deleteTodo = (id) => {
    return {
        type: "DELETE_TODO",
        payload: id
    }
}
export const filterTodo = (data) => {
    return {
        type: "FILTER_TODO",
        payload: data
    }
}