const {Sequelize, db, DataTypes, Model} = require('../db');

// TODO - define the Musician model
class Musician extends Model {}

Musician.init(
    {
        name: DataTypes.STRING,
        instrument: DataTypes.STRING
    },
    {
        sequelize: db,
        modelName: "Musician"
    }
);

db.sync();

module.exports = {
    Musician
};