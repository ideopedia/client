import connectMongo from "../../../utils/connectMongo";
import Books from "../../../models/books.model";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function deleteSummary(req, res) {
  try {
    await connectMongo();
    if (req.body.Password === "Ideopedia@001") {
      var books = await Books.findOneAndDelete({
        Ideo_id: req.body.Ideo_id,
      });
      res.json(books);
    } else {
      console.log("Paswsword Doesnot match :");
    }
  } catch (err) {
    res.json({ err });
  }
}
