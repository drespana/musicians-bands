const {Sequelize, db, Model, DataTypes } = require('../db');

// TODO - define the Band model
class Band extends Model {};

Band.init({
    name:DataTypes.STRING,
    genre:DataTypes.STRING,
},
{
    sequelize: db,
    modelName:"band"
})


module.exports = {
    Band
};