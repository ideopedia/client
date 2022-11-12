import { Schema, model, models } from "mongoose";
//import { Schema, model, models } from "mongoose";
//datas and their data type which are stored our monoose database
var bookCardSchema = new Schema({
  Cover_image: { type: String },
  id: { type: Number },
  Book_Name: { type: String },
  Book_Author: { type: String },
  Launch_date: { type: Date },
  listen_time: { type: Number },
  read_time: { type: Number },
  Upcomming_book: {
    Book_Name: { type: String },
    Cover_image: { type: String },
    Author: { type: String },
    read_time: { type: String },
    Launch_date: { type: Date },
  },
});
var BookCards = models.BookCards || model("BookCards", bookCardSchema);

export default BookCards;
