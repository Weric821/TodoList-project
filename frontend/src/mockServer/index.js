import { belongsTo, Server, hasMany, Model, Factory, RestSerializer } from "miragejs"
import { User } from "../type/user"
import { Todo } from "../type/todo"
import * as faker from "faker"
import * as moment from "moment"
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

export default function MakeServer({ environment = "test" } = {}) {
  return new Server({
    serializers: { application: RestSerializer },
    environment,

    models: {
      user: Model.extend(), //{ todo: hasMany() }
      todo: Model.extend({ author: belongsTo('user') }),
    },

    factories: {
      user: Factory.extend({
        name: faker.name.firstName() + " " + faker.name.lastName(),
        email: faker.internet.email(),
        info: faker.address.country(),
        createTime: moment(faker.date.past(2)).format('LLLL')
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
            deadline: moment(faker.date.past(2)).format('LLLL'),
            tags: [faker.name.firstName() * Math.ceil(Math.random() * 5)],
            createTime: moment(faker.date.past(2)).format('LLLL')
          })
        }
      }

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
}
