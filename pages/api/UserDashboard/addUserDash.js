import connectMongo from "../../../utils/connectMongo";
import UserDashboard from "../../../models/UserDashboard";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addUserDash(req, res) {
  const { Name, Profile_percent, Image,User_Id, Activity, Read, Share, Chat, Feed } =
    req.body;

  try {
    const newUser = new UserDashboard({
      Name,
      Profile_percent,
      Image,
      User_Id,
      Activity,
      Read,
      Share,
      Chat,
      Feed,
    });
    await connectMongo();
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.json({ err });
  }
}
