import connectMongo from "../../../utils/connectMongo";
import SummaryCard from "../../../models/SummaryCard";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function findSummaryCard(req, res) {
  try {
    await connectMongo();
    var cards = await SummaryCard.findOne({
      Book_id: req.body.Book_id,
    });
    console.log(cards);
    res.json(cards);
  } catch (err) {
    res.json({ err });
  }
}
