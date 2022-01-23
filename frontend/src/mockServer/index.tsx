import { belongsTo, createServer, Factory, hasMany, Model } from "miragejs"
import { User } from "../type/user"
import { Todo } from "../type/todo"
import * as faker from "faker"

// import faker from 'faker'

export default function MakeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model.extend({todo:hasMany()}),
      todo: Model.extend({user:belongsTo()}),
    },
    // name: string,
    // email: string,
    // info?: string,
    // createTime?: string

    factories: {
      user: Factory.extend({
        name: faker.name.firstName()+" "+faker.name.lastName(),
        email:  faker.internet.email(),
        info: faker.address.country() //TODO: create factories
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
    },

    routes() {
      this.namespace = "api"

      // this.get("/movies", (schema) => {
      //   return schema.movies.all()
      // })
    },
  })

  return server
}
