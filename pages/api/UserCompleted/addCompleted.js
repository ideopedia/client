import connectMongo from "../../../utils/connectMongo";
import UserCompleted from "../../../models/UserCompleted";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addCompleted(req, res) {
  const { Completed, User_Id } = req.body;

  try {
    const newCompleted = new UserCompleted({
      Completed,
      User_Id,
    });
    await connectMongo();
    const savedCompleted = await newCompleted.save();
    res.json(savedCompleted);
  } catch (err) {
    res.json({ err });
  }
}
