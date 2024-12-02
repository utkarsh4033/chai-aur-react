import { createContext, useContext } from "react";

export const TodoContext = createContext({
  Todos: [
    {
      id: 1,
      Todo: "Todo msg",
      completed: "false",
    },
  ],
  addTodo: (Todo) => {},
  updateTodo: (id, Todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
