import connectMongo from "../../../utils/connectMongo";
import UserHistory from "../../../models/UserHistory";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function listHistory(req, res) {
  try {
    await connectMongo();

    var history = await UserHistory.find({ User_Id: req.body.User_Id });
    res.json(history);
  } catch (err) {
    res.json({ err });
  }
}
