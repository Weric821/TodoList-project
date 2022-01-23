export interface User {
    id?: string,
    name: string,
    email: string,
    info?: string,
    createTime?: string
}

// GET /users/${userId}
export interface getUserByIdRequest {}
export interface getUserByIdResponse {
    user: User
}


