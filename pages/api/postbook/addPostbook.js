import connectMongo from "../../../utils/connectMongo";
import postBooks from "../../../models/PostBook";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addpostBook(req, res) {
  const {
    id,
    Notable_Quotes,
    Book_Name,
    Ideo_image,
    Thankyou,
    Ideo_id,
    Book_Affliate,
    Youtube_url,

    Recomended_Article,
    Recomended_Books,
    Recomended_Ted_talks,
  } = req.body;

  try {
    const newBook = new postBooks({
      id,
      Notable_Quotes,
      Book_Name,
      Ideo_image,
      Ideo_id,
      Thankyou,
      Book_Affliate,
      Youtube_url,

      Recomended_Article,
      Recomended_Books,
      Recomended_Ted_talks,
    });
    await connectMongo();
    const savedBooks = await newBook.save();
    res.json(savedBooks);
  } catch (err) {
    res.json({ err });
  }
}
