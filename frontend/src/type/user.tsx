export type User = {
    id?: string,
    name: string,
    email: string,
    info?: string,
    createTime?: string
}

// GET /users/${userId}
export type getUserByIdRequest = {}
export type getUserByIdResponse = {
    user: User
}


