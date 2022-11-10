import connectMongo from "../../../utils/connectMongo";
import preBooks from "../../../models/prebook.model";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function findpreBook(req, res) {
  try {
    await connectMongo();
    var prebooks = await preBooks.findOne({ id: req.body.id });
    console.log(prebooks);
    res.json(prebooks);
  } catch (err) {
    res.json({ err });
  }
}
