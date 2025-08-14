import { createContext, useContext } from "react";

export const Todocontext = createContext({
    Todos: [
        {
            id: 0,
            todo: "Todo Message",
            completed:false
        },
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
     toggleComplete: (id)=>{}
})
export const  useTodo = ()=> {
    return (
        useContext(Todocontext)
    )
}
export const Todoprovider = Todocontext.Provider
