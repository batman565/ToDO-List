import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";

class TodoStore {
  todos = [];

  constructor() {
    makeAutoObservable(this);
    this.loadTodosFromCache();
    this.fetchTodos();
  }

  loadTodosFromCache() {
    const cachedTodos = localStorage.getItem("todos");
    if (cachedTodos) {
      this.todos = JSON.parse(cachedTodos);
    }
  }

  saveTodosToCache() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  async fetchTodos() {
    try {
      const response = await axios.get("http://localhost:5555/todos");
      runInAction(() => {
        this.todos = response.data;
        this.saveTodosToCache();
      });
    } catch (error) {
      console.error("Failed to fetch todos:", error);
    }
  }

  async addTodo(title) {
    try {
      const response = await axios.post("http://localhost:5555/todos", {
        title,
        completed: false,
      });
      runInAction(() => {
        this.todos.push(response.data);
        this.saveTodosToCache();
      });
    } catch (error) {
      console.error("Failed to add todo:", error);
    }
  }

  async toggleTodo(id) {
    const todo = this.todos.find((todo) => todo.id === id);
    try {
      const response = await axios.patch(`http://localhost:5555/todos/${id}`, {
        completed: !todo.completed,
      });
      runInAction(() => {
        Object.assign(todo, response.data);
        this.saveTodosToCache();
      });
    } catch (error) {
      console.error("Failed to toggle todo:", error);
    }
  }

  async deleteTodo(id) {
    try {
      await axios.delete(`http://localhost:5555/todos/${id}`);
      runInAction(() => {
        this.todos = this.todos.filter((todo) => todo.id !== id);
        this.saveTodosToCache();
      });
    } catch (error) {
      console.error("Failed to delete todo:", error);
    }
  }
}

const todoStore = new TodoStore();
export default todoStore;
