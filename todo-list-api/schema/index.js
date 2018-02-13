const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
  input TodoInput {
    title: String
    completed: Boolean
  }

  type Todo {
    id: ID!
    title: String
    completed: Boolean
  }

  type Query {
    todos: [Todo]
    todo(id: ID!): Todo!
  }

  type Mutation {
    addTodo(input: TodoInput): Todo
    updateTodo(id: ID!, input: TodoInput): Todo
  }
`

module.exports = makeExecutableSchema({ typeDefs, resolvers });
