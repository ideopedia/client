import connectMongo from "../../../utils/connectMongo";
import UserCompleted from "../../../models/UserCompleted";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function updateCompleted(req, res) {
  const {
    name,
    image,
    author,
    percent,
    id,
    date,

    User_Id,
  } = req.body;

  try {
    await connectMongo();
    var user = await UserDashboard.updateOne(
      { User_Id: User_Id },
      {
        $set: {
            name: name,
            image: image,
            author: author,
            percent: percent,
            id: id,
            date: date,
        
            User_Id: User_Id,
          },
      }
    );
    res.json(user);
  } catch (err) {
    res.json({ err });
  }
}
