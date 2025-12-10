import { configDotenv } from 'dotenv';
import mysql from 'mysql2/promise';
configDotenv();

export const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DB_PORT
});

(async () => {
  const connection = await pool.getConnection()
  try {
    const [res] = await connection.query(`SELECT 1  `);
    console.log('DB connected');
  } catch (err) {
    console.log('DB not connected', err);
  }
})();