import { DataSource } from "typeorm";
import { User } from "./entities/User";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("DATABASE_URL environment variable is not set");
}

console.log("Connecting to database with connection string:", connectionString);

export const AppDataSource = new DataSource({
  type: "postgres",
  url: connectionString,
  entities: [User],
  synchronize: true,
  logging: false,
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });
