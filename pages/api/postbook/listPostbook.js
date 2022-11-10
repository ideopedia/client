import connectMongo from "../../../utils/connectMongo";
import postBooks from "../../../models/postbook.model";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function listpostBook(req, res) {
  try {
    await connectMongo();
    if (req.body.Password === "Ideopedia@001") {
      var books = await postBooks.find(req);
      res.json(books);
    } else {
      console.log("Paswsword Doesnot match :");
    }
  } catch (err) {
    res.json({ err });
  }
}
