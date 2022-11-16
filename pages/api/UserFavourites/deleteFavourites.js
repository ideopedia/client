import connectMongo from "../../../utils/connectMongo";
import UserFavourites from "../../../models/UserFavourites";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function deleteFavourites(req, res) {
  try {
    await connectMongo();

    var books = await UserFavourites.findOneAndDelete({
      User_Id: req.body.User_Id,
      name: req.body.name,
    });
    res.json(books);
  } catch (err) {
    res.json({ err });
  }
}
