import connectMongo from "../../../utils/connectMongo";
import UserRecent from "../../../models/UserRecent";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addRecent(req, res) {
  const { Recent, User_Id } = req.body;

  try {
    const newRecent = new UserRecent({
      Recent,

      User_Id,
    });
    await connectMongo();
    const savedRecent = await newRecent.save();
    res.json(savedRecent);
  } catch (err) {
    res.json({ err });
  }
}
