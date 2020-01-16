const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
  async index(request, response){
    const {latitude, longitude, techs, distancia} = request.query;

    const techsArray = parseStringAsArray(techs);
    
    const devs = await Dev.find({
      techs: {
        $in: techsArray,
      },
       location: {
         $near: {
           $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
           },
           $maxDistance: distancia,
         },
       },
    });

    return response.json({ devs });
  },

  async update(){

  },
  
  async destroy(){

  } 
}