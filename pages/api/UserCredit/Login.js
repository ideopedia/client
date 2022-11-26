import connectMongo from "../../../utils/connectMongo";
import UsersCredit from "../../../models/UserCredit";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function Signup(req, res) {
  const { Email, Password } = req.body;

  try {
    await connectMongo();
    var user = await UsersCredit.findOne({
      Email: Email,
      Password: Password,
    });

    res.json(user);
  } catch (err) {
    res.json({ err });
  }
}
