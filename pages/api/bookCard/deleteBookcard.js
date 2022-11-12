import connectMongo from "../../../utils/connectMongo";
import BookCards from "../../../models/BookCard";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function deleteBookcard(req, res) {
  try {
    await connectMongo();
    if (req.body.Password === "Ideopedia@001") {
      var bookCard = await BookCards.findOneAndDelete({
        Book_Name: req.body.Book_Name,
      });
      res.json(bookCard);
    } else {
      console.log("Paswsword Doesnot match :");
    }
  } catch (err) {
    res.json({ err });
  }
}
