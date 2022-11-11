import connectMongo from "../../../utils/connectMongo";
import BookCards from "../../../models/BookCard";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function findBookcard(req, res) {
  try {
    await connectMongo();
    var bookCard = await BookCards.findOne({ id: req.body.id });
    console.log(bookCard);
    res.json(bookCard);
  } catch (err) {
    res.json({ err });
  }
}
