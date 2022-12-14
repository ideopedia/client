import { Schema, model, models } from "mongoose";
//import { Schema, model, models } from "mongoose";
//datas and their data type which are stored our monoose database
var userDashboardSchema = new Schema({
  Name: { type: String },
  Profile_percent: { type: Number },
  Image: { type: String },
  User_Id: { type: String },
  Activity: [{type:Number}],
  Read: { type: Number },
  Share: { type: Number },
  Chat: { type: Number },
  Feed: { type: Number },
});

var UserDashboard =
  models.UserDashboard || model("UserDashboard", userDashboardSchema);

export default UserDashboard;
