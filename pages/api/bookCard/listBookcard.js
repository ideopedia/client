import connectMongo from "../../../utils/connectMongo";
import BookCards from "../../../models/bookcard.model";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function listBookcard(req, res) {
  try {
    await connectMongo();
    if (req.body.Password === "Ideopedia@001") {
      var bookCard = await BookCards.find(req);
      res.json(bookCard);
    } else {
      console.log("Paswsword Doesnot match :");
    }
  } catch (err) {
    res.json({ err });
  }
}
