import connectMongo from "../../../utils/connectMongo";
import BookCards from "../../../models/bookcard.model";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addBookcard(req, res) {
  const {
    id,
    Cover_image,
    Book_Name,
    Book_Author,
    Launch_date,
    listen_time,
    read_time,
    Upcomming_book,
  } = req.body;

  try {
    const newBookCard = new BookCards({
      id,
      Cover_image,
      Book_Name,
      Book_Author,
      Launch_date,
      listen_time,
      read_time,
      Upcomming_book,
    });
    await connectMongo();
    const savedBookCard = await newBookCard.save();
    res.json(savedBookCard);
  } catch (err) {
    res.json({ err });
  }
}
