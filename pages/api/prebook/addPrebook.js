import connectMongo from "../../../utils/connectMongo";
import preBooks from "../../../models/prebook.model";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addpreBook(req, res) {
  const {
    id,
    Cover_image,
    Book_Name,
    Book_Author,
    Author_image,
    Cards,
    About_Author,
    Book_Description,
    read_time,
    listen_time,
    book_page,
    original_read_time,
    benifits,
    Aclaimed,
    Ideos,
  } = req.body;

  try {
    const newpreBook = new preBooks({
      id,
      Cover_image,
      Book_Name,
      Book_Author,
      Author_image,
      About_Author,
      Cards,
      Book_Description,
      read_time,
      listen_time,
      book_page,
      original_read_time,
      benifits,
      Aclaimed,
      Ideos,
    });
    await connectMongo();
    const savedpreBooks = await newpreBook.save();
    res.json(savedpreBooks);
  } catch (err) {
    res.json({ err });
  }
}
