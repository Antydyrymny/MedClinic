export default async function findData(Model, rule = {}) {
    try {
        const result = await Model.find(rule);
        console.log('Data retrieval successfull!');
        return result;
    } catch (error) {
        console.error('Error retrieving data:', error);
        throw new Error(error);
    }
}
