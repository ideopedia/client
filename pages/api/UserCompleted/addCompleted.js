import connectMongo from "../../../utils/connectMongo";
import UserCompleted from "../../../models/UserCompleted";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addCompleted(req, res) {
  const {
    name,
    image,
    author,
    percent,
    id,

    User_Id,
  } = req.body;

  try {
    const newCompleted = new UserCompleted({
      name,
      image,
      author,
      percent,
      id,

      User_Id,
    });
    await connectMongo();
    const savedCompleted = await newCompleted.save();
    res.json(savedCompleted);
  } catch (err) {
    res.json({ err });
  }
}
