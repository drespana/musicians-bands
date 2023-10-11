const { Band } = require('./models/Band')
const { Musician } = require('./models/Musician')
const { Song } = require("./models/Song")
// Define associations here

//Band can have many Musicians
Band.hasMany(Musician);
Musician.belongsTo(Band);

//Bands can have many Songs. 
//Songs can belong to many Bands
Band.belongsToMany(Song, {through: "band-song"});
Song.belongsToMany(Band, {through: "band-song"});


module.exports = {
    Band,
    Musician,
    Song
};
