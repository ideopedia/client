import connectMongo from "../../../utils/connectMongo";
import UserFavourites from "../../../models/UserFavourites";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addFavourites(req, res) {
  const {
    name,
    image,
    author,
    percent,
    id,

    User_Id,
  } = req.body;

  try {
    const newFavourites = new UserFavourites({
      name,
      image,
      author,
      percent,
      id,

      User_Id,
    });
    await connectMongo();
    const savedFavourites = await newFavourites.save();
    res.json(savedFavourites);
  } catch (err) {
    res.json({ err });
  }
}
