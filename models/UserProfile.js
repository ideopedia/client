import { Schema, model, models } from "mongoose";
//import { Schema, model, models } from "mongoose";
//datas and their data type which are stored our monoose database
var userProfileSchema = new Schema({
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

  User_Id: { type: String },
});

var UserProfile = models.UserProfile || model("UserProfile", userProfileSchema);

export default UserProfile;
