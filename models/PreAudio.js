// const mongoose = require("mongoose");
import { Schema, model, models } from "mongoose";
//import { Schema, model, models } from "mongoose";
//datas and their data type which are stored our monoose database
var preAudioSchema = new Schema({
  id: { type: String },

  Book_Name: { type: String },

  Ideos: [
    {
      name: { type: String },
      Ideo_id: { type: String },
      Ideo_num: { type: String },
    },
  ],
});

var PreAudios = models.PreAudios || model("PreAudios", preAudioSchema);

export default PreAudios;
