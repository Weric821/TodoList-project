import { UserCodec } from "./user"
import * as t from "io-ts"

// Codec definition
const TodoCodec = t.intersection([
  t.type({
    author: UserCodec,
    title: t.string,
    content: t.string,
    deadline: t.string,
  }),
  t.partial({
    id: t.string,
    tags: t.array(t.string),
    createTime: t.string,
  }),
])

export const getTodoListResponseCodec = t.type({
  todos: t.array(TodoCodec),
})

export const getTodoByIdResponseCodec = TodoCodec
export const createTodoRequestCodec = TodoCodec
export const createTodoResponseCodec = TodoCodec
export const updateTodoByIdRequestCodec = t.intersection([
  t.type({}),
  t.partial({
    title: t.string,
    content: t.string,
    deadline: t.string,
    tags: t.array(t.string),
  }),
])

export const updateTodoByIdResponseCodec = TodoCodec
export const deleteTodoByIdResponseCodec = TodoCodec


// Todo
export type Todo = t.TypeOf<typeof TodoCodec>

// GET /todos
export type getTodoListResponse = t.TypeOf<typeof getTodoListResponseCodec>

// GET /todos/${todoId}
export type getTodoByIdResponse = t.TypeOf<typeof getTodoByIdResponseCodec>

// POST /todos
export type createTodoRequest = t.TypeOf<typeof createTodoRequestCodec>
export type createTodoResponse = t.TypeOf<typeof createTodoResponseCodec>

// PUT /todos/${todoId}
export type updateTodoByIdRequest = t.TypeOf<typeof updateTodoByIdRequestCodec>
export type updateTodoByIdResponse = t.TypeOf<typeof updateTodoByIdResponseCodec>

// DELETE /todos/${todoId}
export type deleteTodoByIdResponse = t.TypeOf<typeof deleteTodoByIdResponseCodec>
