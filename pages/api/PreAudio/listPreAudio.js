import connectMongo from "../../../utils/connectMongo";
import PreAudios from "../../../models/PreAudio";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function listPreAudios(req, res) {
  try {
    await connectMongo();

    var prebooks = await PreAudios.find({ id: req.body.id });
    res.json(prebooks);
  } catch (err) {
    res.json({ err });
  }
}
