import { Schema, model, models } from "mongoose";
//import { Schema, model, models } from "mongoose";
//datas and their data type which are stored our monoose database
var audioSchema = new Schema({
  id: { type: String },
  audio: { type: String },
  Ideo_id: { type: String },
  Ideo_num: { type: String },
  Total: { type: Number },
  Ideo_title: { type: String },
  Ideo_image: { type: String },
});

var Audios = models.Audios || model("Audios", audioSchema);

export default Audios;
