const graphql = require('graphql').graphql;
const express = require('express');
const graphqlHTTP = require('express-graphql');
const Schema = require('./schema');

const query = 'query { todos { id, title, completed } }';
graphql(Schema, query).then((result) => {
  console.log(JSON.stringify(result,null," "));
});

const app = express()
  .use('/', graphqlHTTP({
    schema: Schema,
    pretty: true,
    graphiql: true,
  }))
  .listen(8080, (err) => {
    console.log('GraphQL Server is now running on localhost:8080');
  });
