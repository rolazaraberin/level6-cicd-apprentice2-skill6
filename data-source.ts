import { DataSource } from "typeorm";
import User from "./src/models/entities/User";
import Login from "./src/models/entities/Login";
import addData1672176285655 from "./src/models/entities/1672176285655-addData";
import dotenv from "dotenv";
dotenv.config();

const databaseName = process.env.mode as string;
if (!databaseName) throw new Error("ERROR: process.env is not configured");
const AppDataSource = getDataSource(databaseName) as DataSource;

export default AppDataSource;

function getDataSource(dataSourceName: string) {
  const dataSources: any = {
    cockroachdb: new DataSource({
      type: "cockroachdb",
      url: process.env.cockroachdb,
      ssl: true,
      //ssl: { rejectUnauthorized: false }, //FOR INSECURE CONNECTIONS ONLY
      synchronize: true,
      logging: false,
      entities: [User, Login],
      migrations: [addData1672176285655],
      subscribers: [],
    }),
    mysql: new DataSource({
      type: "mysql",
      host: "localhost",
      username: process.env.mysqlUser,
      password: process.env.mysqlPassword,
      database: process.env.mysqlDatabase,
      synchronize: true,
      logging: false,
      entities: [User, Login],
      migrations: [addData1672176285655],
      subscribers: [],
    }),
    elephantsql: new DataSource({
      type: "postgres",
      url: process.env.elephantsql,
      synchronize: true,
      logging: false,
      entities: [User, Login],
      migrations: [addData1672176285655],
      subscribers: [],
    }),
  };
  const dataSource = dataSources[dataSourceName];
  return dataSource;
}
