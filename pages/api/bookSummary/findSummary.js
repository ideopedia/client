import connectMongo from "../../../utils/connectMongo";
import Books from "../../../models/BookSum";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function findSummary(req, res) {
  
    await connectMongo();
    var books = await Books.findOne({ Ideo_id: req.body.Ideo_id });
    console.log(books);
    return res.json(books);
  
}
