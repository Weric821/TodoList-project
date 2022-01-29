import {
  belongsTo,
  createServer,
  Factory,
  hasMany,
  Model,
  Response,
} from "miragejs"
import { User } from "../type/user"
import { Todo } from "../type/todo"
import * as faker from "faker"

// import faker from 'faker'

class NotFoundResponse extends Response {
  constructor() {
    super(404, { message: "Not Found" })
  }
}

class BadRequestResponse extends Response {
  constructor() {
    super(400, { message: "Bad Request" })
  }
}

class SuccessResponse extends Response {
  constructor() {
    super(204, { message: "Success" })
  }
}

export default function MakeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model.extend({ todo: hasMany() }),
      todo: Model.extend({ user: belongsTo() }),
    },
    // name: string,
    // email: string,
    // info?: string,
    // createTime?: string

    factories: {
      user: Factory.extend({
        name: faker.name.firstName() + " " + faker.name.lastName(),
        email: faker.internet.email(),
        info: faker.address.country(),
      }),
    },

    seeds(server) {
      server.create("user", {
        id: "1",
        name: "eric",
        email: faker.internet.email(),
      })
      server.create("user", { name: "Interstellar", year: 2014 })
      server.create("user", { name: "Dunkirk", year: 2017 })

      console.log(server.db.dump())
    },

    routes() {
      this.namespace = "api"

      // GET /users/${userId}
      this.get("/users/:key", (schema, request) => {
        let userId = request.params.key
        const res = schema.find("user", userId)
        return res ? res.attrs : new NotFoundResponse()
      })
    },
  })

  return server
}
