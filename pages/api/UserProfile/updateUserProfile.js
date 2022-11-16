import connectMongo from "../../../utils/connectMongo";
import UserProfile from "../../../models/UserProfile";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function updateUserProfile(req, res) {
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
    await connectMongo();
    var user = await UserProfile.updateOne(
      { User_Id: User_Id },
      {
        $set: {
            photo: photo,
            email: email,
            official_mail: official_mail,
            phone: phone,
            designation: designation,
            dob: dob,
            native: native,
            school: school,
            spouse: spouse,
            address: address,
            permanent_address: permanent_address,
            about: about,
        
            User_Id: User_Id,
          },
      }
    );
    res.json(user);
  } catch (err) {
    res.json({ err });
  }
}
