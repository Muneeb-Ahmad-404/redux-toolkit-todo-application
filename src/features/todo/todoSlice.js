import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}],
    editingTodo: null
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        setEditingTodo: (state, action) => {     
            state.editingTodo = action.payload;  
            console.log(state.editingTodo);
        },
        updateTodo: (state, action) => {            
            const {id, text} = action.payload;
            const existingTodo = state.todos.find(todo => todo.id === id);
            if (existingTodo) {
                existingTodo.text = text;
            }
            state.editingTodo = null;
        }
    }
})

export const {addTodo, removeTodo, setEditingTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer