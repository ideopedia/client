import connectMongo from "../../../utils/connectMongo";
import Books from "../../../models/books.model";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function findSummary(req, res) {
  try {
    await connectMongo();
    var books = await Books.findOne({ Ideo_id: Ideo_id });
    console.log(books);
    res.json(books);
  } catch (err) {
    res.json({ err });
  }
}
