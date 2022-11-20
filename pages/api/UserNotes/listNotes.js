import connectMongo from "../../../utils/connectMongo";
import UserNotes from "../../../models/UserNotes";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function listNotes(req, res) {
  try {
    await connectMongo();

    var books = await UserNotes.find({ User_Id: req.body.User_Id });
    
    res.json(books);
  } catch (err) {
    res.json({ err });
  }
}
