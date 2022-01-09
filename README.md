# TodoList-project
This is a front-end and back-end exercise project.


[Interface]

User {
    id?: string,
    name: string,
    email: string,
    // password: string
    info? :string
    createTime?: Date? string?
}


Todo {
    id?: string,
    author: User,
    title: string,
    content: string,
    deadline: Date? string?
    tags?: string [],
    createTime?: Date? string?
}


- GET /users/${userId}
getUserByIdRequest(){}
getUserByIdResponse(){
    user: User
}


- GET /todos
getTodoListRequest(){}
getTodoListResponse(){
    todos: Todo []
}

- GET /todos/${todoId}
getTodoByIdRequest(){}
getTodoByIdResponse(){
    todo: Todo
}

- POST /todos
createTodoRequest(){
    todo: Todo
}
createTodoResponse(){
    todo: Todo
}

- PUT /todos/${todoId}
updateTodoByIdRequest(){
    title?: string
    content?: string
    deadline?: Date? string?
    tags?: string []
}
updateTodoByIdResponse(){
    todo: Todo
}

- DELETE /todos/${todoId}
deleteTodoByIdRequest(){}
deleteTodoByIdResponse(){
    todo: Todo
}


