import connectMongo from "../../../utils/connectMongo";
import UserNotes from "../../../models/UserNotes";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addNotes(req, res) {
  const {
    Book_Name,
    Author,
    Notes,
    Book_id,

    User_Id,
  } = req.body;

  try {
    const newNotes = new UserNotes({
      Book_Name,
      Author,
      Notes,
      Book_id,

      User_Id,
    });
    await connectMongo();
    const savedNotes = await newNotes.save();
    res.json(savedNotes);
  } catch (err) {
    res.json({ err });
  }
}
