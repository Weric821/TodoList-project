import { User } from './user';

export type Todo = {
    id?: string
    author: User,
    title: string,
    content: string,
    deadline: string,
    tags?: string[],
    createTime?: string
}

// GET /todos
export type getTodoListRequest = {}
export type getTodoListResponse = {
    todos: Todo[]
}

// GET /todos/${todoId}
export type getTodoByIdRequest = {}
export type getTodoByIdResponse = {
    todo: Todo
}

// POST /todos
export type createTodoRequest = {
    todo: Todo
}
export type createTodoResponse = {
    todo: Todo
}

// PUT /todos/${todoId}
export type updateTodoByIdRequest = {
    title?: string,
    content?: string,
    deadline?: string,
    tags?: string[]
}
export type updateTodoByIdResponse = {
    todo: Todo
}

// DELETE /todos/${todoId}
export type deleteTodoByIdRequest = {}
export type deleteTodoByIdResponse = {
    todo: Todo
}

