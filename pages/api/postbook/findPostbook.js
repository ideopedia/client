import connectMongo from "../../../utils/connectMongo";
import postBooks from "../../../models/postbook.model";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function findpostBook(req, res) {
  try {
    await connectMongo();
    var books = await postBooks.findOne({
      Ideo_id: req.body.Ideo_id,
    });
    console.log(books);
    res.json(books);
  } catch (err) {
    res.json({ err });
  }
}
