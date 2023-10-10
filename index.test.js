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
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const musician = await Musician.create({name: "Justin Bieber", instrument: "guitar"})
        expect(musician.name).toBe('Justin Bieber');
    })

    test('can update a Band', async () => {
        // TODO - test updating a band
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
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
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can delete a Musician', async () => {
        // TODO - test deleting a musician
        const musician = await Musician.findByPk(1)
        const deletedMusician = await musician.destroy();
        expect(deletedMusician.id).toBe(1);
    })
})

module.exports = db;