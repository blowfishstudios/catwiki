const axios = require("axios");
const isEmpty = require('../helpers/helper');

let getBreedById = async (req, res) => {

    const breedName = req.params.name

    const r = await axios.get(`https://api.thecatapi.com/v1/breeds/${breedName}`)
    const obj = r.data;
    if (isEmpty(obj)) {
        res.status(404).send("Not Found")
    } else {
        //Extract only the necessary data 
        const breedInfo = {
            id: obj.id,
            name: obj.name,
            description: obj.description,
            temperament: obj.temperament,
            origin: obj.origin,
            life_span: obj.life_span,
            adaptability: obj.adaptability,
            affection_level: obj.affection_level,
            child_friendly: obj.child_friendly,
            grooming: obj.grooming,
            intelligence: obj.intelligence,
            health_issues: obj.health_issues,
            social_needs: obj.social_needs,
            stranger_friendly: obj.stranger_friendly,
            photos: [],
        }

        //Get breed ID in order to fetch photos
        const breedID = breedInfo.id

        //Send request to Cat API for 8 photos maximum (MAY SEND LESS)
        const photoObj = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=8&breed_id=${breedID}`)

        //Extract photos from object and store into breedInfo obj
        breedInfo.photos = photoObj.data.map(obj => obj.url)

        //Send entire breedInfo object back 
        res.status(200).send(breedInfo)
    }
}

module.exports = getBreedById;