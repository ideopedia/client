import connectMongo from "../../../utils/connectMongo";
import UsersCredit from "../../../models/UserCredit";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function Signup(req, res) {
  const { Email, Password, Invite_code } = req.body;

  try {
    await connectMongo();
    // var user = await UsersCredit.findOne({
    //   Email: Email,
    //   Password: Password,
    //   Invite_code: Invite_code,
    // });
    var signupuser = await UsersCredit.findOneAndUpdate(
      { Email: Email, Invite_code: Invite_code },
      {
        $set: {
          Password: Password,
        },
      }
    );

    res.json(signupuser);
  } catch (err) {
    res.json({ err });
  }
}
