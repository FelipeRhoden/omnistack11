const connection = require('../database/connection');

module.exports = {
    async create(req, res, next){
       const { id } = req.body;

       const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();

            console.log(ong);

        if (!ong) {
            return res.status(400).json({ error : 'No ONG found with this ID.'});
        }

        return res.json(ong);
    }
}