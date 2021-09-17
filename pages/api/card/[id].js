
import { cards } from '../../../cards'

export default function handler(req, res) {
    const { id } = req.query
    const card = cards[id]
    res.status(200).json( card )
}