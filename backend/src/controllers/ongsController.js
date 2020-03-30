const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {

    async index(req, res, next){
        const ongs = await connection('ongs').select('*');
    
        return res.json(ongs);
    },

    async create(req, res, next){
        const { name, email, whatsapp, city, uf} = req.body;

        const id = generateUniqueId();
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
    
        return res.json({id});
    }
}