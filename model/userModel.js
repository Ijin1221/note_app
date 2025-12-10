import { pool } from "../config/dbConfig.js";

export const registerUserMdl = async (details) => {
  const connection = await pool.getConnection();
  try {
    if (details.name.trim() == "" || details.pwd.trim() == "") {
      return "invalid";
    };

    const [isUserExist] = await connection.query(`SELECT id FROM users WHERE name = ?`,[details.name]);
    if (isUserExist.length) {
      return "userExist";
    }
    
    await connection.query(`INSERT INTO users (name, pwd) VALUES (?, ?)`,[details.name, details.pwd]);
    return 'success';

  } catch (err) {
    console.log(err);
    return "error";
  } finally {
    connection.release();
  }
};


export const userLoginMdl = async (details) => {
  const connection = await pool.getConnection();
  try {
    const [isUserExist] = await connection.query(`SELECT id, name, pwd FROM users WHERE name = ?`, [details.name]);
    if (!isUserExist.length) {
      return "userNotExist";
    };

    if (isUserExist[0]?.name != details.name) {
      return "wrngUsr";
    };

    if (isUserExist[0]?.pwd != details.pwd) {
      return "wrngPwd"
    }

    const id = isUserExist[0].id;
    const name = isUserExist[0].name;

    return {sts: "success", id, name }
  } catch (err) {
    console.log(err);
    return "error";
  } finally {
    connection.release();
  }
};

export const deleteUserMdl = async (details) => {
  const connection = await pool.getConnection();
  await connection.beginTransaction();

  try {
    const [isUserExist] = await connection.query(`SELECT id, pwd FROM users WHERE id = ?`,[details.id]);
    if ( isUserExist[0]?.pwd !== details.pwd ) {
      return "wrngPwd";
    };

    await connection.query(`DELETE FROM users WHERE id = ?`,[details.id]);
    await connection.query(`DELETE FROM notes WHERE userID = ?`,[details.id]);

    await connection.commit();
    return "success";
  } catch (err) {
    await connection.rollback();
    console.log(err);
    return "error";
  } finally {
    connection.release();
  }
};