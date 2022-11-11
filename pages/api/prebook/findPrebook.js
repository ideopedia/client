import connectMongo from "../../../utils/connectMongo";
import preBooks from "../../../models/PreBook";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function findPrebook(req, res) {
  await connectMongo();
  var prebooks = await preBooks.findOne({ id: req.body.id });
  //console.log(prebooks);
  return res.json(prebooks);
}
