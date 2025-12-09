import { createNoteMdl } from "../model/noteModel.js";

export const createNoteCtrl = async (req, res) => {
  const result = await createNoteMdl();
};