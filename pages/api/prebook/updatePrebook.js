import connectMongo from "../../../utils/connectMongo";
import preBooks from "../../../models/prebook.model";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function updatepreBook(req, res) {
  const {
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
  } = req.body;

  try {
    await connectMongo();
    var prebooks = await preBooks.updateOne(
      { Book_Name: Book_Name },
      {
        $set: {
          id: id,
          Cover_image: Cover_image,
          Book_Name: Book_Name,
          Book_Author: Book_Author,
          Author_image: Author_image,
          About_Author: About_Author,
          Book_Description: Book_Description,
          read_time: read_time,
          Cards: Cards,
          listen_time: listen_time,
          book_page: book_page,
          original_read_time: original_read_time,
          benifits: benifits,
          Aclaimed: Aclaimed,
          Ideos: Ideos,
        },
      }
    );
    res.json(prebooks);
  } catch (err) {
    res.json({ err });
  }
}
