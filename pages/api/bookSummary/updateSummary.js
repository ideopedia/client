import connectMongo from "../../../utils/connectMongo";
import Books from "../../../models/BookSum";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function updateSummary(req, res) {
  const {
    id,
    Book_Name,
    Ideo,
    Ideo_image,
    Ideo_id,
    Book_Author,

    Ideo_Peaks,

    Book_Summary,
  } = req.body;

  try {
    await connectMongo();
    var books = await Books.updateOne(
      { Book_Name: Book_Name },
      {
        $set: {
          id: id,
          Ideo_id: Ideo_id,
          Book_Name: Book_Name,
          Ideo: Ideo,
          Ideo_image: Ideo_image,
          Book_Author: Book_Author,

          Ideo_Peaks: Ideo_Peaks,

          Book_Summary: Book_Summary,
        },
      }
    );
    res.json(books);
  } catch (err) {
    res.json({ err });
  }
}
