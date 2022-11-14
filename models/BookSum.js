import { Schema, model, models } from "mongoose";
//import { Schema, model, models } from "mongoose";
//datas and their data type which are stored our monoose database
var bookSchema = new Schema({
  id: { type: Number },
  Book_Name: { type: String },
  Ideo_id: { type: Number },
  Ideo_title: { type: String },
  Ideo_image: { type: String },
  Ideo: { type: String },
  Book_Author: { type: String },

  Ideo_Peaks: [{ name: { type: String }, quote: { type: String } }],

  Book_Summary: [
    {
      Ideo_Quest: [{ type: String }],
      Content: [[{ type: String }]],
      Quotes: [{ type: String }],
      Notes: [{ type: String }],
      images: [[{ type: String }]],
    },
  ],
});

var Books = models.Books || model("Books", bookSchema);

export default Books;
