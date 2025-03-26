import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import todoStore from "./stores/TodoStore";

const TodoList = observer(() => {
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = async () => {
    if (newTodo.trim()) {
      await todoStore.addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <div className="container">
      <h1>Список задач</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Добавить задачу"
      />
      <button onClick={handleAddTodo}>Добавить</button>
      <ul>
        {todoStore.todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <label className="textlabel">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => todoStore.toggleTodo(todo.id)}
              />
              {todo.title}
            </label>
            <button onClick={() => todoStore.deleteTodo(todo.id)}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default TodoList;
