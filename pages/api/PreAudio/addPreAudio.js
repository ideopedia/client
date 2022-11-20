import connectMongo from "../../../utils/connectMongo";
import PreAudios from "../../../models/PreAudio";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addpreAudio(req, res) {
  const {
    id,

    Book_Name,
    Ideos,
  } = req.body;

  try {
    const newpreAudio = new PreAudios({
      id,

      Book_Name,
      Ideos,
    });
    await connectMongo();
    const savedpreAudios = await newpreAudio.save();
    res.json(savedpreAudios);
  } catch (err) {
    res.json({ err });
  }
}
