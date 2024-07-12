import { Pool, QueryResult, QueryResultRow } from 'pg';
import createError from 'http-errors';

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is not set');
}

const pool = new Pool({
  connectionString: connectionString,
});

export const executeQuery = async <T extends QueryResultRow>({
  query,
  params,
  returnFirstRowOnly = false,
}: {
  query: string;
  params?: any[];
  returnFirstRowOnly?: boolean;
}): Promise<QueryResult<T> | T | null> => {
  console.time(query);

  try {
    const client = await pool.connect();
    try {
      const res = await client.query<T>(query, params);
      console.timeEnd(query);

      if (returnFirstRowOnly) {
        return res.rows.length ? res.rows[0] : null;
      }

      return res;
    } finally {
      client.release();
    }
  } catch (error: unknown) {
    console.timeEnd(query);
    console.error('Ошибка выполнения запроса:', error);
    throw createError(500, 'Внутренняя ошибка сервера');
  }
};
