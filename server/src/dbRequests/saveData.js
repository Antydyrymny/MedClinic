export default async function saveData(Model, newData) {
    try {
        const newDocument = new Model(newData);
        await newDocument.save();
        console.log('Data saved successfully!');
    } catch (error) {
        if (error.name === 'MongoServerError' && error.code === 11000) {
            const duplicates = Object.keys(error.keyPattern);
            const errorMessage = `Duplicate values found: ${duplicates.join(', ')}`;
            throw new Error(errorMessage);
        } else {
            console.error('Error saving data:', error);
            throw new Error(error);
        }
    }
}
