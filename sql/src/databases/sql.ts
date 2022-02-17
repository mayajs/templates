import { environment as env } from "../environments";
import sample from "../model/sample.model";

export default {
  name: "main",
  options: {
    database: env.SQL_CONNECTION_NAME,
    username: env.SQL_CONNECTION_USER,
    password: env.SQL_CONNECTION_PASS,
    options: {
      host: env.SQL_CONNECTION_URL,
      dialect: "mysql",
    },
  },
  schemas: [sample],
};
