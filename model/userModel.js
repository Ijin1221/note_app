import { pool } from "../config/dbConfig.js";

export const registerUserMdl = async (details) => {
  const connection = await pool.getConnection();
  try {
    if (details.name.trim() == "" || details.pwd.trim() == "") {
      return "invalid";
    };
    await connection.query(
      `INSERT INTO users (name, pwd) VALUES (?, ?)`
      ,[details.name, details.pwd]);
    return 'success';
  } catch (err) {
    console.log(err);
    return "error";
  } finally {
    connection.release();
  }
};