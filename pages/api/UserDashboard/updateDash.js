import connectMongo from "../../../utils/connectMongo";
import UserDashboard from "../../../models/UserDashboard";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function updateUserDash(req, res) {
  const {
    Name,
    Profile_percent,
    User_Id,
    Image,
    Activity,
    Read,
    Share,
    Chat,
    Feed,
  } = req.body;

  try {
    await connectMongo();
    var user = await UserDashboard.updateOne(
      { User_Id: User_Id },
      {
        $set: {
          Name: Name,
          Profile_percent: Profile_percent,
          User_Id: User_Id,
          Image: Image,
          Activity: Activity,
          Read: Read,
          Share: Share,
          Chat: Chat,
          Feed: Feed,
        },
      }
    );
    res.json(user);
  } catch (err) {
    res.json({ err });
  }
}
