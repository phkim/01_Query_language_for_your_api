import { GraphQLServer } from "graphql-yoga";
import "./env";
import schema from "./schema";

const server = new GraphQLServer({ schema });

const options = {
  port: process.env.PORT,
  endpoint: process.env.ENDPOINT,
  subscriptions: process.env.SUBSCRIPTIONS,
  playground: process.env.PLAYGROUND,
}

server.start(options, ({ port, endpoint, subscriptions, playground }) => {
  console.log(
    `Server started, listening on port ${port} for incoming requests.`,
  );
  console.log("endpoint: " + endpoint);
  console.log("subscriptions: " + subscriptions);
  console.log("playground: " + playground);
});