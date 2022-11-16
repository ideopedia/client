import { Schema, model, models } from "mongoose";
//import { Schema, model, models } from "mongoose";
//datas and their data type which are stored our monoose database
var userHistorySchema = new Schema({
  History: {
    name: { type: String },
    action: { type: String },
    date: { type: String },
    points: { type: Number },
  },

  User_Id: { type: String },
});

var UserHistory = models.UserHistory || model("UserHistory", userHistorySchema);

export default UserHistory;
