// Import Modules
const express = require("express");
const cors = require("cors");
const glob = require("glob");
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { mergeTypeDefs, mergeResolvers } = require("@graphql-tools/merge");

const config = require ("./config/config");

// Import Developer's Modules
const connect = require("./helpers/connection");

// Load Instance of Express
const app = express();

// Enable Middleware
app.use(cors());

// =========================================
//FIND ALL RESOLVERS
//iterate through resolvers file in the folder "graphql/folder/folder/whatever*-resolver.js"
let resolvers = glob.sync("src/graphql/*/*/*-resolver.js");
console.log('resolvers: ' + resolvers)
let registerResolvers = [];
for (const resolver of resolvers) {
  // add resolvers to array
  registerResolvers = [...registerResolvers, require("../" + resolver)];
}

//FIND ALL TYPES
//iterate through resolvers file in the folder "graphql/folder/folder/whatever*-type.js"
let types = glob.sync("src/graphql/*/*/*-type.js");
console.log('types: ' + types)
let registerTypes = [];
for (const type of types) {
  // add types to array
  registerTypes = [...registerTypes, require("../" + type)];
}
// =========================================



// Create Schema - Merge Types & Resolvers
const schema = makeExecutableSchema({
  typeDefs: mergeTypeDefs(registerTypes),
  resolvers: mergeResolvers(registerResolvers),
});

// Establish Database Connection
connect.connect(config.db);

// Set Route for GraphQL
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,  // This setting is for development purposes only!
  })
);

// Listen for Server Connection
app.listen(config.port, () => {
  console.log(`GraphQL API server is running and can be accessed at http://localhost:${config.port}/graphql`);
});