import * as t from "io-ts"

export const ErrorMessageCodec = t.type({
  type: t.string,
  message: t.string,
})

// ErrorMessage
export type ErrorMessage = t.TypeOf<typeof ErrorMessageCodec>
