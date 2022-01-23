import { User } from './user';

export interface Todo {
    id?: string
    author: User,
    title: string,
    content: string,
    deadline: string,
    tags?: string[],
    createTime?: string
}

// GET /todos
export interface getTodoListRequest  {}
export interface getTodoListResponse {
    todos: Todo[]
}

// GET /todos/${todoId}
export interface getTodoByIdRequest  {}
export interface getTodoByIdResponse {
    todo: Todo
}

// POST /todos
export interface createTodoRequest {
    todo: Todo
}
export interface createTodoResponse {
    todo: Todo
}

// PUT /todos/${todoId}
export interface updateTodoByIdRequest {
    title?: string,
    content?: string,
    deadline?: string,
    tags?: string[]
}
export interface updateTodoByIdResponse {
    todo: Todo
}

// DELETE /todos/${todoId}
export interface deleteTodoByIdRequest {}
export interface deleteTodoByIdResponse {
    todo: Todo
}

