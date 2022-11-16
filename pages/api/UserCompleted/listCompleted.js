import connectMongo from "../../../utils/connectMongo";
import UserCompleted from "../../../models/UserCompleted";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function listCompleted(req, res) {
  try {
    await connectMongo();

    var books = await UserCompleted.find({
      User_Id: req.body.User_Id,
      percent: req.body.percent,
    });
    res.json(books);
  } catch (err) {
    res.json({ err });
  }
}
