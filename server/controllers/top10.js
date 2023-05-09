const axios = require("axios");


let getTop10 = async (req, res) => {
    try {
        const r = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10')
        console.log(r.data);

        const response = r.data

        res.status(200).send(response)
    } catch (err) { console.log(err) }
}

module.exports = getTop10