import connectMongo from "../../../utils/connectMongo";
import Audios from "../../../models/Audio";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addAudio(req, res) {
  const { id, audio, Ideo_id, Ideo_num, Total, Ideo_title, Ideo_image } =
    req.body;

  try {
    const newAudio = new Audios({
      id,
      audio,
      Ideo_id,
      Ideo_num,
      Total,
      Ideo_title,
      Ideo_image,
    });
    await connectMongo();
    const savedAudios = await newAudio.save();
    res.json(savedAudios);
  } catch (err) {
    res.json({ err });
  }
}
