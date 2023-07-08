export default async function findData(model, rule = {}) {
    try {
        const result = await model.find(rule);
        console.log('Data retrieval successfull!');
        return result;
    } catch (error) {
        console.error('Error retrieving data:', error);
    }
}
