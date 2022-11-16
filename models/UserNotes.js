import { Schema, model, models } from "mongoose";
//import { Schema, model, models } from "mongoose";
//datas and their data type which are stored our monoose database
var userNotesSchema = new Schema({
  Book_Name: { type: String },
  Author: { type: String },
  Notes: {
    notes: { type: String },
  },

  User_Id: { type: String },
});

var UserNotes = models.UserNotes || model("UserNotes", userNotesSchema);

export default UserNotes;
