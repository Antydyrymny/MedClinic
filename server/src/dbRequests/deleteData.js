export default async function deleteData(Model, query) {
    try {
        const result = await Model.deleteOne(query);
        if (result.deletedCount === 1) console.log('Data saved deleted!');
        else console.log('No matching data found for deletion');
    } catch (error) {
        console.error('Error deleting data:', error);
        throw new Error(error);
    }
}
