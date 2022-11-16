import { Schema, model, models } from "mongoose";
//import { Schema, model, models } from "mongoose";
//datas and their data type which are stored our monoose database
var userDashboardSchema = new Schema({
  Name: { type: String },
  Profile_percent: { type: Number },
  Image: { type: String },
  Activity: {
    sunday: { type: Number },
    monday: { type: Number },
    tuesday: { type: Number },
    thursday: { type: Number }, 
    friday: { type: Number },
    saturday: { type: Number },
    wednesday: { type: Number },
  },
  Read: { type: Number },
  Share: { type: Number },
  Chat: { type: Number },
  Feed: { type: Number },
  History: [
    {
      name: { type: String },
      action: { type: String },
      date: { type: String },
      points: { type: Number },
    },
  ],
  Profile: {
    photo: { type: String },
    email: { type: String },
    official_mail: { type: String },
    phone: { type: String },
    designation: { type: String },
    dob: { type: String },
    native: { type: String },
    school: { type: String },
    spouse: { type: String },
    address: { type: String },
    permanent_address: { type: String },
    about: { type: String },
  },

  User_Id: { type: String },
});

var UserDashboard =
  models.UserDashboard || model("UserDashboard", userDashboardSchema);

export default UserDashboard;
