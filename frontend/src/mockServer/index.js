import { belongsTo, Server, hasMany, Model, Factory, RestSerializer } from "miragejs"
import { User } from "../type/user"
import { Todo } from "../type/todo"
import * as faker from "faker"
import * as moment from "moment"
// import { association, Factory, trait } from 'ember-cli-mirage';



// import faker from 'faker'

export default function MakeServer({ environment = "test" } = {}) {
  return new Server({
    serializers: {application:RestSerializer},
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

      // todo: Factory.extend({
      //   author: trait({
      //     receiver: 'user',
      //     user: association()
      //   }),
      //   title: faker.address.country(),
      //   content: faker.address.country(),
      //   deadline: moment(faker.date.past(2)).format('LLLL'),
      //   tags: [faker.name.firstName() * 3],
      //   createTime: moment(faker.date.past(2)).format('LLLL')
      // }),
    },

    seeds(server) {
      let users = server.createList("user", 2)
      console.log(users)

      
      server.create("todo", {
        author: users[0],
        title: faker.address.country(),
        content: faker.address.country(),
        deadline: moment(faker.date.past(2)).format('LLLL'),
        tags: [faker.name.firstName() * 3],
        createTime: moment(faker.date.past(2)).format('LLLL')
      })

      server.create("todo", {
        author: users[0],
        title: faker.address.country(),
        content: faker.address.country(),
        deadline: moment(faker.date.past(2)).format('LLLL'),
        tags: [faker.name.firstName() * 3],
        createTime: moment(faker.date.past(2)).format('LLLL')
      })

      server.create("todo", {
        author: users[1],
        title: faker.address.country(),
        content: faker.address.country(),
        deadline: moment(faker.date.past(2)).format('LLLL'),
        tags: [faker.name.firstName() * 3],
        createTime: moment(faker.date.past(2)).format('LLLL')
      })
      
      console.log(server.db.dump())
    },

    routes() {
      this.namespace = "api"

      // this.get("/movies", (schema) => {
      //   return schema.movies.all()
      // })
    },
  })
}
