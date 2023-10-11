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

/* async function out() {
    const createdBands = await Band.bulkCreate([
        {name: "Linkin Park", genre: "Rock"},
        {name: "OneRepublic", genre: "Pop"},
        {name: "Artic Monkeys", genre: "Rock"}
    ])

    const createdMusicians = await Musician.bulkCreate([
        {name: "Chester", instrument: "Vocals"}, // Linkin Park
        {name: "Mike", instrument: "Synthesizer"}, // Linkin Park
        {name: "Eddie", instrument: "Guitar"}, // OneRepublic
        {name: "Alex", instrument: "Keyboard"}, // Arctic Monkeys
        {name: "Nick", instrument: "Bass"} // Arctic Monkeys
    ]);


    const linkinPark = await Band.findByPk(1);
    const chester = await Musician.findByPk(1);
    await linkinPark.addMusician(chester);
    const lpWithMusician = await findOne({
        where: {
            id: 1
        },
        include: Musician
    })

    //const out = JSON.stringify(linkinPark, null, 2);
    return lpWithMusician;
}

console.log(out()) */


module.exports = {
    Band,
    Musician,
    Song
};
