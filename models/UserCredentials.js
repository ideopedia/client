import { Schema, model, models } from "mongoose";
//import { Schema, model, models } from "mongoose";
//datas and their data type which are stored our monoose database
var userCreditSchema = new Schema({
  Email: { type: String },
  Password: { type: String },
  Invite_code: { type: String },

  User_Id: { type: String },
});

var UsersCredit = models.UsersCredit || model("UsersCredit", userCreditSchema);

export default UsersCredit;
