import connectMongo from "../../../utils/connectMongo";
import UserCompleted from "../../../models/UserCompleted";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function deleteCompleted(req, res) {
  try {
    await connectMongo();

    var books = await UserCompleted.findOneAndDelete({
      User_Id: req.body.User_Id,
      name: req.body.name,
      percent: req.body.percent,
    });
    res.json(books);
  } catch (err) {
    res.json({ err });
  }
}
