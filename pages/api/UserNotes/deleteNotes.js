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
      User_Id: req.body.User_Id,
      Book_Name:req.body.Book_Name,
    });
    res.json(notes);
  } catch (err) {
    res.json({ err });
  }
}
