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
        const band = await Band.create({
            name:"Reign",
            location:"Chicago"
        })
        expect(band.name).toBe('Reign');
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
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
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can delete a Band', async () => {
        // TODO - test deleting a band
        const band = await Band.findByPk(1)
        const deletedBand = await band.destroy();

        expect(deletedBand.id).toBe(1);

    })

    test('can delete a Musician', async () => {
        // TODO - test deleting a musician

        expect('NO TEST').toBe('EXPECTED VALUE HERE');

    })
})