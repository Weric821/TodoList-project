import axios from "axios"
import {
  getTodoListRequest,
  getTodoListResponse,
  getTodoByIdRequest,
  getTodoByIdResponse,
  createTodoRequest,
  createTodoResponse,
  updateTodoByIdRequest,
  updateTodoByIdResponse,
  deleteTodoByIdRequest,
  deleteTodoByIdResponse,
} from "../type/todo"
import { ErrorMessage } from "../type/errorMessage"

const routes = "/api"

// GET /todos
export async function getTodos(
  getTodoList: getTodoListRequest
): Promise<getTodoListResponse | ErrorMessage> {
  return new Promise((resolve, reject) => {
    axios
      .get<getTodoListResponse>(`${routes}/todos`, {})
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

// GET /todos/${todoId}
export async function getTodoById(
  todoId: string,
  getTodoById: getTodoByIdRequest
): Promise<getTodoByIdResponse | ErrorMessage> {
  return new Promise((resolve, reject) => {
    axios
      .get<getTodoByIdResponse>(`${routes}/todos/${todoId}`, {})
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

// POST /todos
export async function createTodo(
  createTodo: createTodoRequest
): Promise<createTodoResponse | ErrorMessage> {
  return new Promise((resolve, reject) => {
    axios
      .post<createTodoResponse>(`${routes}/todos`, {
        params: {
          createTodo,
        },
      })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

// PUT /todos/${todoId}
export async function updateTodo(
  todoId: string,
  updateTodoById: updateTodoByIdRequest
): Promise<updateTodoByIdResponse | ErrorMessage> {
  return new Promise((resolve, reject) => {
    axios
      .put<updateTodoByIdResponse>(`${routes}/todos/${todoId}`, {
        params: {
          updateTodoById,
        },
      })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

// DELETE /todos/${todoId}
export async function deleteTodo(
  todoId: string,
  deleteTodoById: deleteTodoByIdRequest
): Promise<deleteTodoByIdResponse | ErrorMessage> {
  return new Promise((resolve, reject) => {
    axios
      .delete<deleteTodoByIdResponse>(`${routes}/todos/${todoId}`, {
        params: {
          deleteTodoById,
        },
      })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
