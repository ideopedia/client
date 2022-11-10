import connectMongo from "../../../utils/connectMongo";
import Books from "../../../models/books.model";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addSummary(req, res) {
  const {
    id,
    Book_Name,
    Ideo,
    Ideo_id,
    Book_Author,

    Ideo_Peaks,

    Book_Summary,
  } = req.body;

  try {
    const newBook = new Books({
      id,
      Book_Name,
      Ideo,
      Ideo_id,
      Book_Author,

      Ideo_Peaks,

      Book_Summary,
    });
    await connectMongo();
    const savedBooks = await newBook.save();
    res.json(savedBooks);
  } catch (err) {
    res.json({ err });
  }
}
