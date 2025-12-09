import { registerUserMdl } from "../model/userModel";

export const registerUserCtrl = async (req, res) => {
  const {name, pwd} = req.body;
  const details = { name, pwd };
  const result = await registerUserMdl(details);

  if ( result === "invalid" ) return res.status(400).send({message: "Invalid name or passoword"});
  if ( result === "error" ) return res.status(500).send({message: "Somthing went worng"});
  if ( result === "success" ) return res.status(201).send({message: "User created successfully"});
};