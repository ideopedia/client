//const mongoose = require("mongoose");
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

var preBooks = models.PreBooks || model("PreBooks", prebookSchema);

export default preBooks;
