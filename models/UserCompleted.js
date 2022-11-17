import { Schema, model, models } from "mongoose";
//import { Schema, model, models } from "mongoose";
//datas and their data type which are stored our monoose database
var userCompletedSchema = new Schema({
  name: { type: String },
  image: { type: String },
  author: { type: String },
  percent: { type: Number },
  id: { type: Number },
  date: { type: String },
  User_Id: { type: String },
});

var UserCompleted =
  models.UserCompleted || model("UserCompleted", userCompletedSchema);

export default UserCompleted;
