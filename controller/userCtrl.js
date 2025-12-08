import { registerUserMdl } from "../model/userModel";

export const registerUserCtrl = async (req, res) => {
  const {name, pwd} = req.body;
  const details = { name, pwd };
  const result = await registerUserMdl(details);
  
  return res.send(result)
};