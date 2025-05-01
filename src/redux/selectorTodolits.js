export const todolistSelector = (state) => {
    const todoRemaining = state.todoList.filter((todo) => {
        return todo.name.includes(state.filters.search)
    })
    return todoRemaining;
}

export const selectorTodoList = (state) => {
    const todoRemaining = state.todoList.filter((todo) => {
        return todo.name.includes(state.filters.search)
    })
    return todoRemaining;
}
