import connectMongo from "../../../utils/connectMongo";
import preBooks from "../../../models/PreBook";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function listpreBook(req, res) {
  try {
    await connectMongo();
    if (req.body.Password === "Ideopedia@001") {
      var prebooks = await preBooks.find(req);
      res.json(prebooks);
    } else {
      console.log("Paswsword Doesnot match :");
    }
  } catch (err) {
    res.json({ err });
  }
}
