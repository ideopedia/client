import connectMongo from "../../../utils/connectMongo";
import BookCards from "../../../models/BookCard";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function listBookcard(req, res) {
  try {
    await connectMongo();

    var bookCard = await BookCards.find(req);
    res.json(bookCard);
  } catch (err) {
    res.json({ err });
  }
}
