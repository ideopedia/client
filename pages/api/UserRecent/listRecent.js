import connectMongo from "../../../utils/connectMongo";
import UserRecent from "../../../models/UserRecent";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function listRecent(req, res) {
  try {
    await connectMongo();

    var recents = await UserRecent.find({ User_Id: req.body.User_Id });
    res.json(recents);
  } catch (err) {
    res.json({ err });
  }
}
