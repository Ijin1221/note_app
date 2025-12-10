import { deleteUserMdl, registerUserMdl, userLoginMdl } from "../model/userModel.js";

export const registerUserCtrl = async (req, res) => {
  const {name, pwd} = req.body;
  const details = { name, pwd };
  const result = await registerUserMdl(details);

  if ( result === "invalid" ) return res.status(400).send({message: "Invalid name or passoword"});
  if ( result === "userExist" ) return res.status(400).send({message: "User alredy exists"});
  if ( result === "error" ) return res.status(500).send({message: "Somthing went worng"});
  if ( result === "success" ) return res.status(201).send({message: "User created successfully"});
};

export const userLoginCtrl = async (req, res) => {
  const { name, pwd } = req.body;
  const details = { name, pwd };
  const result = await userLoginMdl(details);

  if ( result === "userNotExist" ) return res.status(400).send({message: "This user is not exist"});
  if ( result === "wrngUsr" ) return res.status(400).send({message: "User name does't match"});
  if ( result === "wrngPwd" ) return res.status(400).send({message: "Password does't match"});
  if ( result === "error" ) return res.status(500).send({message: "Somthing went worng"});
  if ( result.sts === "success" ) return res.status(201).send({message: "User created successfully", data: {id: result.id, 
    user: result.name}});
};

export const deleteUserCtrl = async (req, res) => {
  const { id } = req.query;
  const { pwd } = req.body;
  const details = { id, pwd };

  const result = await deleteUserMdl(details);
  if ( result === "wrngPwd" ) return res.status(400).send({message: "Invalid passoword"});
  if ( result === "error" ) return res.status(500).send({message: "Somthing went worng"});
  if ( result === "success" ) return res.status(201).send({message: "User deleted successfully"});
};