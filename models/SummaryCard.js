import { Schema, model, models } from "mongoose";
//import { Schema, model, models } from "mongoose";
//datas and their data type which are stored our monoose database
var summaryCardSchema = new Schema({
  Book_name: { type: String },
  Book_id: { type: String },
  card_id: { type: Number },
  Card: [{ content: { type: String }, style_id: { type: String } }],
});

var SummaryCard = models.SummaryCard || model("SummaryCard", summaryCardSchema);

export default SummaryCard;
