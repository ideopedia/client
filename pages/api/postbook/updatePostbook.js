import connectMongo from "../../../utils/connectMongo";
import postBooks from "../../../models/postbook.model";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function updatepostBook(req, res) {
  const {
    id,
    Ideo_id,
    Notable_Quotes,
    Book_Name,
    Thankyou,
    Book_Affliate,
    Youtube_url,

    Recomended_Article,
    Recomended_Books,
    Recomended_Ted_talks,
  } = req.body;

  try {
    await connectMongo();
    var books = await postBooks.updateOne(
      { Book_Name: Book_Name },
      {
        $set: {
          id: id,
          Ideo_id: Ideo_id,
          Notable_Quotes: Notable_Quotes,
          Book_Name: Book_Name,
          Thankyou: Thankyou,
          Book_Affliate: Book_Affliate,
          Youtube_url: Youtube_url,

          Recomended_Article: Recomended_Article,
          Recomended_Books: Recomended_Books,
          Recomended_Ted_talks: Recomended_Ted_talks,
        },
      }
    );
    res.json(books);
  } catch (err) {
    res.json({ err });
  }
}
