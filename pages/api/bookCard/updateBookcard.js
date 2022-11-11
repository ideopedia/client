import connectMongo from "../../../utils/connectMongo";
import BookCards from "../../../models/BookCard";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function updateBookcard(req, res) {
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
    await connectMongo();
    var bookCard = await BookCards.updateOne(
      { Book_Name: Book_Name },
      {
        $set: {
          id: id,
          Cover_image: Cover_image,
          Book_Name: Book_Name,
          Book_Author: Book_Author,
          listen_time: listen_time,
          Launch_date: Launch_date,
          read_time: read_time,
          Upcomming_book: Upcomming_book,
        },
      }
    );
    res.json(bookCard);
  } catch (err) {
    res.json({ err });
  }
}
