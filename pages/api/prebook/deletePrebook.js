import connectMongo from "../../../utils/connectMongo";
import preBooks from "../../../models/prebook.model";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function deletepreBook(req, res) {
  try {
    await connectMongo();
    if (req.body.Password === "Ideopedia@001") {
      var prebooks = await preBooks.findOneAndDelete({
        id: req.body.id
      });
      res.json(prebooks);
    } else {
      console.log("Paswsword Doesnot match :");
    }
  } catch (err) {
    res.json({ err });
  }
}
