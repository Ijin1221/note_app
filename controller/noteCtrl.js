import { createNoteMdl, deleteNoteMdl, listNoteByIdMdl } from "../model/noteModel.js";

export const createNoteCtrl = async (req, res) => {
  const { userId, title, content } = req.body;
  const details = {
    userId, title, content
  };

  const result = await createNoteMdl( details );
  if (result === "userNotExist") return res.status(400).send({ message: "No user fount"});
  if (result === "ctntMissing") return res.status(400).send({ message: "Note is not complete"});
  if (result === "error") return res.status(500).send({ message: "Something went wrong"});
  if (result === "success") return res.status(201).send({ message: "Note added"});
};

export const deleteNoteCtrl = async (req, res) => {
  const { userId, noteId } = req.query;
  const details = { userId, noteId };

  const result = await deleteNoteMdl(details);
  if (result === "userNotExist") return res.status(400).send({ message: "No user fount"});
  if (result === "noteNotExist") return res.status(400).send({ message: "No note fount"});
  if (result === "error") return res.status(500).send({ message: "Something went wrong"});
  if (result === "success") return res.status(201).send({ message: "Note deleted"});
}; 

export const listNoteByIdCtrl = async (req, res) => {
  const { userId } = req.query;
  const details = { userId };

  const result = await listNoteByIdMdl(details);
  if ( result.sts === "success" ) return res.status(200).send({message: result.data});
  if (result === "error") return res.status(500).send({ message: "Something went wrong"});
}; 

