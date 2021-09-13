
import {cards} from '../../../cards'

export default (req, res) => {
    const {
        query: {cid},
    } = req
    res.end('Post: ${cid}')
}