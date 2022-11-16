import connectMongo from "../../../utils/connectMongo";
import UserFavourites from "../../../models/UserFavourites";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function listCompleted(req, res) {
  try {
    await connectMongo();

    var books = await UserFavourites.find({ User_Id: req.body.User_Id });
    res.json(books);
  } catch (err) {
    res.json({ err });
  }
}
