import connectMongo from "../../../utils/connectMongo";
import SummaryCard from "../../../models/SummaryCard";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addSummaryCard(req, res) {
  const { Book_name, Book_id, card_id, Card } = req.body;

  try {
    const newSummaryCard = new SummaryCard({
      Book_name,
      Book_id,
      card_id,
      Card,
    });
    await connectMongo();
    const savedSummaryCards = await newSummaryCard.save();
    res.json(savedSummaryCards);
  } catch (err) {
    res.json({ err });
  }
}
