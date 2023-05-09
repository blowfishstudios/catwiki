const axios = require("axios");

async function getBreeds(req, res) {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds')
    const names = response.data.map(breed => ({ name: breed.name, id: breed.id }))
    res.status(200).send({ names })
}

module.exports = getBreeds;