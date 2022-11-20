import connectMongo from "../../../utils/connectMongo";
import Audios from "../../../models/Audio";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function listAudios(req, res) {
  try {
    await connectMongo();

    var audios = await Audios.find({ Ideo_id: req.body.Ideo_id });
    res.json(audios);
  } catch (err) {
    res.json({ err });
  }
}
