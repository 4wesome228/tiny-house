import { ApolloServer } from "apollo-server-express";
import { Application } from "express";

import { loadSchema } from "../utils";
import * as resolvers from "./resolvers";

export const startApolloServer = async (app: Application) => {
  const types = ["root", "listing"];
  try {
    const typeDefs = await Promise.all(types.map(loadSchema));
    //console.log(resolvers);
    /*  const context = ({ req }) => ({
      user: req.user && db.users.get(req.user.sub),
    }); */
    const server = new ApolloServer({ typeDefs: typeDefs, resolvers });
    server.applyMiddleware({ app });
  } catch (error) {
    console.log(error);
  }
};
