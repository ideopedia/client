import connectMongo from "../../../utils/connectMongo";
import UserProfile from "../../../models/UserProfile";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function findUserProfile(req, res) {
  try {
    await connectMongo();

    var users = await UserProfile.find({ User_Id: req.body.User_Id });
    res.json(users);
  } catch (err) {
    res.json({ err });
  }
}
