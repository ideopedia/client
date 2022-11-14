// const mongoose = require("mongoose");
import { Schema, model, models } from "mongoose";
//import { Schema, model, models } from "mongoose";
//datas and their data type which are stored our monoose database
var prebookSchema = new Schema({
  id: { type: Number },
  Cover_image: { type: String },
  Book_Name: { type: String },
  Book_Author: { type: String },
  Cards: [{ type: String }],
  Author_image: { type: String },
  About_Author: { type: String },
  Book_Description: { type: String },
  read_time: { type: Number },
  listen_time: { type: Number },
  book_page: { type: Number },
  original_read_time: { type: Number },
  benifits: [
    {
      name: { type: String },
      benifits: [{ type: String }],
      image: { type: String },
    },
  ],
  Aclaimed: [{ type: String }],
  Ideos: [{ name: { type: String }, Ideo_id: { type: Number } }],
});

<<<<<<< HEAD
=======
//returns a function which returns either a compiled model, or a precompiled model
//s is a String for the model name e.g. "User", and model is the mongoose Schema
// function getModel(s, model) {
//   return function () {
//     return mongoose.modelNames().indexOf(s) === -1
//       ? mongoose.model(s, model)
//       : mongoose.connection.model(s);
//   };
// }
// module.exports = getModel("PreBooks", prebookSchema);
>>>>>>> 9f94fd7da7402414d135ddf2e2f9fbbb85e8d9b3
var preBooks = models.PreBooks || model("PreBooks", prebookSchema);

export default preBooks;
