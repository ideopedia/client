import connectMongo from "../../../utils/connectMongo";
import UserHistory from "../../../models/UserHistory";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addHistory(req, res) {
  const { History, User_Id } = req.body;

  try {
    const newHistory = new UserHistory({
      History,
      User_Id,
    });
    await connectMongo();
    const savedHistory = await newHistory.save();
    res.json(savedHistory);
  } catch (err) {
    res.json({ err });
  }
}
