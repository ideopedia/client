import { Schema, model, models } from "mongoose";
//import { Schema, model, models } from "mongoose";
//datas and their data type which are stored our monoose database
var userFavouritesSchema = new Schema({
  Favourites: {
    name: { type: String },
    image: { type: String },
    author: { type: String },
    percent: { type: Number },
    id: { type: Number },
  },

  User_Id: { type: String },
});

var UserFavourites =
  models.UserFavourites || model("UserFavourites", userFavouritesSchema);

export default UserFavourites;
