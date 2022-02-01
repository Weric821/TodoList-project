import * as t from "io-ts"

// Codec definition
export const UserCodec = t.intersection([
  t.type({
    name: t.string,
    email: t.string,
  }),
  t.partial({
    id: t.string,
    info: t.string,
    createTime: t.string,
  }),
])

export const getUserByIdResponseCodec = UserCodec


// User
export type User = t.TypeOf<typeof UserCodec>

// GET /users/${userId}
export type getUserByIdResponse = t.TypeOf<typeof getUserByIdResponseCodec>
