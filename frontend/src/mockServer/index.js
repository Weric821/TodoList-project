import {
  belongsTo,
  Server,
  hasMany,
  Model,
  Factory,
  RestSerializer,
} from "miragejs"
import { User } from "../type/user"
import { Todo } from "../type/todo"
import * as faker from "faker"
import * as moment from "moment"
import { createServer } from "miragejs"
import { cons } from "fp-ts/lib/ReadonlyNonEmptyArray"
// import { association, Factory, trait } from 'ember-cli-mirage';

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

export default function MakeServer({ environment = "development" }) {
  return createServer({
    serializers: {
      application: RestSerializer,
      todo: RestSerializer.extend({ include: ["author"], embed: true }),
    },
    environment,

    models: {
      user: Model.extend(), //{ todo: hasMany() }
      todo: Model.extend({ author: belongsTo("user") }),
    },

    factories: {
      user: Factory.extend({
        name: faker.name.firstName() + " " + faker.name.lastName(),
        email: faker.internet.email(),
        info: faker.address.country(),
        createTime: moment(faker.date.past(2)).format("LLLL"),
      }),
    },

    seeds(server) {
      let users = server.createList("user", 2)

      for (let user of users) {
        for (let i = 0; i < Math.ceil(Math.random() * 5); i++) {
          server.create("todo", {
            author: user,
            title: faker.address.country(),
            content: faker.address.country(),
            deadline: moment(faker.date.past(2)).format("LLLL"),
            tags: [faker.name.firstName() * Math.ceil(Math.random() * 5)],
            createTime: moment(faker.date.past(2)).format("LLLL"),
          })
        }
      }

      console.log(server.db.dump())
    },

    routes() {
      this.namespace = "api"

      // GET /users/${userId}
      this.get("/users/:key", function (schema, request) {
        let userId = request.params.key
        const res = schema.find("user", userId)
        return res ? res.attrs : new NotFoundResponse()
      })

      // GET /todos
      this.get("/todos", function (schema, request) {
        let res = schema.todos.all().models
        res = res.map((obj) => {
          return this.serialize(obj).todo
        })
        return res ? { todos: res } : new NotFoundResponse()
      })

      // GET /todos/${todoId}
      this.get("/todos/:key", function (schema, request) {
        const todoId = request.params.key
        const res = schema.find("todo", todoId)
        return res ? res.attrs : new NotFoundResponse()
      })

      // POST /todos
      this.post("/todos", function (schema, request) {
        const attrs = JSON.parse(request.requestBody)
        const authorId = attrs.author.id
        const authorRes = schema.find("user", authorId)

        if (authorRes) {
          const { author, ...noAuthorAttrs } = attrs
          const res = schema.create("todo", {
            authorId: authorId,
            ...noAuthorAttrs,
          })
          return res ? attrs : new BadRequestResponse()
        }
        return new BadRequestResponse()
      })

      // PUT /todos/${todoId}
      this.put("/todos/:key", function (schema, request) {
        const todoId = request.params.key
        const attrs = JSON.parse(request.requestBody)
        const findRes = schema.find("todo", todoId)

        if (findRes) {
          const updateRes = findRes.update(attrs)
          return this.serialize(updateRes).todo
        }
        return NotFoundResponse()
      })

      // DELETE /todos/${todoId}
      this.delete("/todos/:key", function (schema, request) {
        const todoId = request.params.key
        const findRes = schema.find("todo", todoId)

        if (findRes) {
          findRes.destroy()
          return this.serialize(findRes).todo
        }
        return NotFoundResponse()
      })
    },
  })
}
