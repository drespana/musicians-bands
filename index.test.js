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
            location:"Atlanta"
        })
        expect(updatedBand.location).toBe('Atlanta');
    })

    test('can update a Musician', async () => {
        // TODO - test updating a musician
        const musician = await Musician.findByPk(1)
        const updatedMusician = await musician.update({
            name: "Kanye West",
            instrument: "midi keyboard"
        })
        expect(musician.name).toBe('Kanye West');
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
        expect(song.year).toEqual(1982);
    })

    test('can delete Song', async () => {
        const song = await Song.findByPk(1);
        const deletedSong = await song.destroy();
        expect(deletedSong.id).toEqual(1);
    });
})
