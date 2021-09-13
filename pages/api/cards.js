import { cards } from '../../cards'

export default function handler(req, res) {
    res.status(200).json(cards);
}