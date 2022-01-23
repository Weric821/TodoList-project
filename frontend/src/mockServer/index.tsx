import { belongsTo, createServer, hasMany, Model, Factory } from "miragejs"
import { User } from "../type/user"
import { Todo } from "../type/todo"
import * as faker from "faker"
import * as moment from "moment"
// import { association, Factory, trait } from 'ember-cli-mirage';



// import faker from 'faker'

export default function MakeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model.extend({todo:hasMany()}),
      todo: Model.extend({user:belongsTo()}),
    },

    factories: {
      user: Factory.extend({
        name: faker.name.firstName()+" "+faker.name.lastName(),
        email:  faker.internet.email(),
        info: faker.address.country(),
        createTime: moment(faker.date.past(2)).format('LLLL')
      }),
      
    //   todo: Factory.extend({
    //     author: trait({
    //       receiver: 'user',
    //       user: association()
    //     }),
    //     title: faker.address.country(),
    //     content: faker.address.country(),
    //     deadline: moment(faker.date.past(2)).format('LLLL'),
    //     tags: [faker.name.firstName() * 3],
    //     createTime: moment(faker.date.past(2)).format('LLLL')
    //   }),
    },

    seeds(server) {
      server.create("user", {
        id: "1",
        name: "eric",
        email: faker.internet.email(),
      })
      // server.create("user", { name: "Interstellar", year: 2014 })
      // server.create("user", { name: "Dunkirk", year: 2017 })
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
