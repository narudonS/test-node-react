import { Request, Response } from "express";
import fs from "fs";
import path from "path";

const filePath = path.join(__dirname, "../database/todos.txt");

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

const readTodosFromFile = (): Todo[] => {
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const data = fs.readFileSync(filePath, "utf-8");
  return data ? JSON.parse(data) : [];
};

const writeTodosToFile = (todos: Todo[]): void => {
  fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));
};

export const getTodos = (req: Request, res: Response): Response => {
  const todos = readTodosFromFile();
  return res.json(todos);
};

export const getTodoById = (req: Request, res: Response): Response => {
  const todos = readTodosFromFile();
  const todo = todos.find((todo) => todo.id === parseInt(req.params.id, 10));
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }
  return res.json(todo);
};

export const addTodo = (req: Request, res: Response): Response => {
  const todos = readTodosFromFile();
  const newTodo: Todo = {
    id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
    task: req.body.task,
    completed: false,
  };
  todos.push(newTodo);
  writeTodosToFile(todos);
  return res.status(201).json(newTodo);
};

export const updateTodo = (req: Request, res: Response): Response => {
  const todos = readTodosFromFile();
  const todoIndex = todos.findIndex(
    (todo) => todo.id === parseInt(req.params.id, 10)
  );
  if (todoIndex === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }
  todos[todoIndex] = { ...todos[todoIndex], ...req.body };
  writeTodosToFile(todos);
  return res.json(todos[todoIndex]);
};

export const deleteTodo = (req: Request, res: Response): Response => {
  const todos = readTodosFromFile();
  const newTodos = todos.filter(
    (todo) => todo.id !== parseInt(req.params.id, 10)
  );
  writeTodosToFile(newTodos);
  return res.status(204).send();
};
