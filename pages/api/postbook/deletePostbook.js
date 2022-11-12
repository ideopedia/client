import connectMongo from "../../../utils/connectMongo";
import postBooks from "../../../models/PostBook";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function deletepostBook(req, res) {
  try {
    await connectMongo();
    if (req.body.Password === process.env.PASSWORD) {
      var books = await postBooks.findOneAndDelete({
        
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
