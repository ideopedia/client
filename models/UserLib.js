import { Schema, model, models } from "mongoose";
//import { Schema, model, models } from "mongoose";
//datas and their data type which are stored our monoose database
var userLibSchema = new Schema({
  Favourites: [
    {
      name: { type: String },
      image: { type: String },
      author: { type: String },
      percent: { type: Number },
      id: { type: Number },
    },
  ],
  Completed: [
    {
      name: { type: String },
      image: { type: String },
      author: { type: String },
      percent: { type: Number },
      id: { type: Number },
    },
  ],
  Recent: [
    {
      name: { type: String },
      image: { type: String },
      author: { type: String },
      percent: { type: Number },
      id: { type: Number },
    },
  ],
  Notes: [
    {
      name: {type: String},
      
    }
  ],

  User_Id: { type: String },
});

var UsersLib = models.UsersLib || model("UsersLib", userLibSchema);

export default UsersLib;
