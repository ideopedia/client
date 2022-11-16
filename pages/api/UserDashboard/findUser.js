import connectMongo from "../../../utils/connectMongo";
import UserDashboard from "../../../models/UserDashboard";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function findUser(req, res) {
  try {
    await connectMongo();

    var users = await UserDashboard.find({ User_Id: req.body.User_Id });
    res.json(users);
  } catch (err) {
    res.json({ err });
  }
}
