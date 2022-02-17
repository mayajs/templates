import { config } from "dotenv";
config();

export const environment = {
  production: false,
  SQL_CONNECTION_URL: process.env.SQL_CONNECTION_URL || "localhost",
  SQL_CONNECTION_NAME: process.env.SQL_CONNECTION_NAME || "database",
  SQL_CONNECTION_USER: process.env.SQL_CONNECTION_USER || "root",
  SQL_CONNECTION_PASS: process.env.SQL_CONNECTION_PASS || "",
};
