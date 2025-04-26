const initState = {
    filters: {
        search: '',
        status: 'All',
        priority: []
    },
    todoList:[
        { id: 1, name: 'Learn ReactJS', completed: false, priority: 'high' },
        { id: 2, name: 'Learn Redux', completed: false, priority: 'medium' },
        { id: 3, name: 'Learn Redux Saga', completed: false, priority: 'low' },
    ]
}
const rootReducer = (state = initState, action) => {
    console.log('reducer', action)
    switch (action.type) {
        case 'ADD_TODO':
        
            return {
                ...state,
                todoList: [...state.todoList, action.payload]
            }
        case 'DELETE_TODO':
            return {
                ...state,
                todoList: state.todoList.filter(todo => todo.id !== action.payload)
            }
        case 'UPDATE_TODO':
            return {
                ...state,
                todoList: state.todoList.map(todo => todo.id === action.payload.id ? action.payload : todo)
            }
        case 'FILTER_TODO':
            return {
                ...state,
                filters: action.payload
            }
        default:
            return state
    }
}

export default rootReducer;