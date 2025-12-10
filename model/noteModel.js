import { pool } from "../config/dbConfig.js";

export const createNoteMdl = async (details) => {
  const connection = await pool.getConnection();
  try {
    const [isUserExist] = await connection.query(`SELECT id FROM users WHERE id = ?`, [details.userId]);
    if (!isUserExist.length) {
      return "userNotExist";
    };
    
    const userId = details.userId;
    const title = details.title?.trim() || "";
    const content = details.content?.trim() || "";

    if (title === "" || content === "") {
      return "ctntMissing";
    };

    await connection.query(`INSERT INTO notes (title, content, userId) VALUES (?, ?, ?)`, [title, content, userId]);
    return "success";
  } catch (err) {
    console.log(err);
    return "error";
  } finally {
    connection.release();
  }
};

export const deleteNoteMdl = async (details) => {
  const connection = await pool.getConnection();
  try {
    const [isUserExist] = await connection.query(`SELECT id FROM users WHERE id = ?`, [details.userId]);
    if (!isUserExist.length) {
      return "userNotExist";
    };

    const [isNoteExist] = await connection.query(`SELECT id FROM notes WHERE id = ?`, [details.noteId]);
    if (!isNoteExist.length) {
      return "noteNotExist";
    };

    await connection.query(`DELETE FROM notes WHERE id = ? AND userId = ?`, [details.noteId, details.userId]);
    return "success";
  } catch (err) {
    console.log(err);
    return "error";
  } finally {
    connection.release();
  }
};

export const listNoteByIdMdl = async (details) => {
  const connection = await pool.getConnection();
  try {
    const [notes] = await connection.query(`SELECT userId, title, content FROM notes WHERE userId = ?`, [details.userId]);
    if (!notes.length) {
      return { sts : "success", data: "No notes created yet"};
    } else {
      return { sts : "success", data: notes};
    }
  } catch (err) {
    console.log(err)
    return "error"
  } finally {
    connection.release();
  }
};
