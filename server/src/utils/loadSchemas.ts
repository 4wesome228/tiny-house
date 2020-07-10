import path from "path";
import fs from "fs";

export const loadSchema = (type: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const p = path.resolve(
      process.cwd(),
      "src",
      "apollo-server",
      "typeDefs",
      `${type}.gql`
    );
    fs.readFile(p, { encoding: "utf-8" }, (err, data) => {
      if (err) reject(err.message);
      resolve(data);
    });
  });
};
