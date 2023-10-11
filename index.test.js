const { db } = require('./db');
const { Band, Musician, Song } = require('./index')

describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await db.sync({ force: true });
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        const band = await Band.create({
            name:"Reign",
            location:"Chicago"
        })
        expect(band.name).toBe('Reign');
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const musician = await Musician.create({name: "Justin Bieber", instrument: "guitar"})
        expect(musician.name).toBe('Justin Bieber');
    })

    test('can update a Band', async () => {
        // TODO - test updating a band
        const band = await Band.findByPk(1)
        const updatedBand = await band.update({
            name: "Donald Glover",
            location:"Atlanta"
        })
        expect(updatedBand.name).toBe("Donald Glover");
    })

    test('can update a Musician', async () => {
        // TODO - test updating a musician
        const musician = await Musician.findByPk(1)
        const updatedMusician = await musician.update({
            name: "Kanye West",
            instrument: "midi keyboard"
        })
        expect(updatedMusician.name).toBe('Kanye West');
    })

    test('can delete a Band', async () => {
        // TODO - test deleting a band
        const band = await Band.findByPk(1)
        const deletedBand = await band.destroy();

        expect(deletedBand.id).toBe(1);

    })

    test('can delete a Musician', async () => {
        // TODO - test deleting a musician
        const musician = await Musician.findByPk(1)
        const deletedMusician = await musician.destroy();
        expect(deletedMusician.id).toBe(1);
    })

    test('can create a Song', async () => {
        const song = await Song.create({
            title: "Thriller",
            year:1981,
            length: 6
        });
        expect(song.title).toEqual("Thriller");
    })

    test('can find Song', async () => {
        const songs = await Song.findAll();
        expect(songs.length).toEqual(1);
    })

    test('can update Song', async () => {
        const song = await Song.findByPk(1);
        const updatedSong = await song.update({
            year: 1982
        });
        expect(updatedSong.year).toEqual(1982);
    })

    test('can delete Song', async () => {
        const song = await Song.findByPk(1);
        const deletedSong = await song.destroy();
        expect(deletedSong.id).toEqual(1);
    });
})

describe("Association tests", () => {
    beforeAll(async () => {
        await db.sync({ force: true });
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

        const createdSongs = await Song.bulkCreate([
            {title: "Happy Birthday", year: 1900, length: 60},
            {title: "Sound of Silence", year: 2001, length: 120},
            {title: "505", year: 2007, length: 254}
        ])
    })

    test('Band has many musicians', async () => {
        const linkinPark = await Band.findByPk(1);
        const chester = await Musician.findByPk(1);
        const mike = await Musician.findByPk(2);
        await linkinPark.addMusician(chester);
        await linkinPark.addMusician(mike);
        const lpWithMusician = await Band.findOne({
            where: {
                id: 1
            },
            include: Musician
        });
        // const out = await lpWithMusician.Musicians[0].name + ", " + lpWithMusician.Musicians[1].name
        const bandWithMusicians = await linkinPark.getMusicians();
        // console.log(JSON.stringify(bandWithMusicians[0].name, null, 2));
        expect(bandWithMusicians[1].name).toEqual("Mike")
    })

    test("Many Songs can be added to Band", async () => {
        const allSongs = await Song.findAll();

        const linkinPark = await Band.findByPk(1);

        await linkinPark.addSongs(allSongs);

        const bandWithSongs = await Band.findOne({
            where: {
                id: 1
            },
            include: Song
        });

        const out = bandWithSongs.Songs.length;
        //console.log(out)
        expect(out).toEqual(3);
    })

    test("Many Bands have the Songs", async () => {
        const allBands = await Band.findAll();

        const happyBirthday = await Song.findByPk(1);

        await happyBirthday.addBands(allBands);

        const SongWithBands = await Song.findOne({
            where: {
                id: 1
            },
            include: Band
        });


        const out = SongWithBands.bands.length;
        console.log(out)
        expect(out).toEqual(3);        
    })
    
})
