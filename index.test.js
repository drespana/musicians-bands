const { sequelize } = require('./db');
const { Band, Musician, Song } = require('./index')

describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can update a Band', async () => {
        // TODO - test updating a band
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can update a Musician', async () => {
        // TODO - test updating a musician
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can delete a Band', async () => {
        // TODO - test deleting a band
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can delete a Musician', async () => {
        // TODO - test deleting a musician
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
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