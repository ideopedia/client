import connectMongo from "../../../utils/connectMongo";
import UserProfile from "../../../models/UserProfile";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addUserProfile(req, res) {
  const {
    photo,
    email,
    official_mail,
    phone,
    designation,
    dob,
    native,
    school,
    spouse,
    address,
    permanent_address,
    about,

    User_Id,
  } = req.body;

  try {
    const newUserProfile = new UserProfile({
      photo,
      email,
      official_mail,
      phone,
      designation,
      dob,
      native,
      school,
      spouse,
      address,
      permanent_address,
      about,

      User_Id,
    });
    await connectMongo();
    const savedProfile = await newUserProfile.save();
    res.json(savedProfile);
  } catch (err) {
    res.json({ err });
  }
}
