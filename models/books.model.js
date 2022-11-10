import { Schema, model, models } from "mongoose";
//datas and their data type which are stored our monoose database
const bookSchema = new Schema({
  id: { type: Number },
  Book_Name: { type: String },
  Ideo_id: { type: Number },
  Ideo: { type: String },
  Book_Author: { type: String },

  Ideo_Peaks: [{ type: String }],

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
const Books = models.Books || model("books", bookSchema);

export default Books;

/*

const mongoose = require("mongoose");
//datas and their data type which are stored our monoose database
const bookSchema = new mongoose.Schema({
  //Cover_image: { type: String },
  Book_Name: { type: String },
  Book_Author: { type: String },
  //About_Author: { type: String },
  //Book_Description: { type: String },
  //Forward: { type: String },
  //why: { type: String },
  Introduction: { content: { type: String }, highlightes: { type: String }, quotes: { type: String },image: [{ type: String }] },
  //Book_Context: [{ type: String }],
  Ideo_Peaks: [[{ type: String }]],
  Ideo_Take_aways: { type: String },
  Book_Summary: [{ Ideo_Quest: [{ type: String }], Content: [{ type: String }], Quotes: [{ type: String }], Notes: [{ type: String }], images: [{ type: String }] }],
  Book_Affliate: { type: String },
  //Summary_Audio: { type: String },
  //Read_time: { type: String },
  Youtube_url: { type: String },
  //Audio_length: { type: String, },
  Recomended_Article: [{name: {type: String },link: {type: String}}],
  Recomended_Books: [{ Book_name: { type: String }, Author: { type: String } }],
  Recomended_Ted_talks: [{ Topic: { type: String }, Speaker: { type: String },link: { type: String }, Speaker_image: { type: String } }]

});

module.exports = Books = mongoose.model("books", bookSchema);



*/
