import connectMongo from "../../../utils/connectMongo";
import UserNotes from "../../../models/UserNotes";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function deleteNotes(req, res) {
  try {
    await connectMongo();

    var notes = await UserNotes.findOneAndDelete({
      _id: req.body._id,
    });
    res.json(notes);
  } catch (err) {
    res.json({ err });
  }
}
