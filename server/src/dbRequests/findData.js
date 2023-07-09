export default async function findData(Model, rule = {}, findOne = false) {
    try {
        const result = findOne ? await Model.findOne(rule) : await Model.find(rule);
        console.log('Data retrieval successfull!');
        return result;
    } catch (error) {
        console.error('Error retrieving data:', error);
        throw new Error(error);
    }
}
