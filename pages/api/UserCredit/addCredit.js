import connectMongo from "../../../utils/connectMongo";
import UsersCredit from "../../../models/UserCredit";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addUser(req, res) {
  const {
    Email,
    Password,
    Invite_code,

    User_Id,
  } = req.body;

  try {
    const newUser = new UsersCredit({
      Email,
      Password,
      Invite_code,

      User_Id,
    });
    await connectMongo();
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.json({ err });
  }
}
