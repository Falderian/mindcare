// src/db/db.ts
import { Pool, QueryResult, QueryResultRow } from "pg";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("DATABASE_URL environment variable is not set");
}

console.log("Connecting to database with connection string:", connectionString);

const pool = new Pool({
  connectionString: connectionString,
});

export const executeQuery = async <T extends QueryResultRow>(
  query: string,
  params?: any[]
): Promise<QueryResult<T>> => {
  try {
    const client = await pool.connect();
    try {
      const res = await client.query<T>(query, params);
      return res;
    } finally {
      client.release();
    }
  } catch (error) {
    console.error("Error executing query:", error);
    throw error;
  }
};
