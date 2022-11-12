import { Schema, model, models } from "mongoose";
//import { Schema, model, models } from "mongoose";
//datas and their data type which are stored our monoose database
var postbookSchema = new Schema({
  id: { type: Number },
  Ideo_id: { type: Number },
  Book_Name: { type: String },
  Notable_Quotes: [{ type: String }],
  Ideo_image: { type: String },
  Thankyou: {
    content: [{ type: String }],
    highlightes: { type: String },
    quotes: { type: String },
    image: [{ type: String }],
  },
  Book_Affliate: { type: String },
  Youtube_url: { type: String },

  Recomended_Article: [{ name: { type: String }, link: { type: String } }],
  Recomended_Books: [{ Book_name: { type: String }, Author: { type: String } }],
  Recomended_Ted_talks: [
    {
      Topic: { type: String },
      Speaker: { type: String },
      link: { type: String },
      Speaker_image: { type: String },
    },
  ],
});

var postBooks = models.postBooks || model("PostBooks", postbookSchema);

export default postBooks;
