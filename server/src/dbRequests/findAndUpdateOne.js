export default async function findAndUpdateOne(model, id, rule) {
    try {
        const result = await model.findOneAndUpdate({ id }, rule, { new: true });
        console.log('Update successfull!');
        return result;
    } catch (error) {
        console.error('Error updating data:', error);
    }
}

// const updatedData = [
//     async () =>
//         findAndUpdateOne(BookedTime, 1, {
//             $set: { 'bookedDateTime.0.times': ['11:00', '12:00', '18:00'] },
//         }),
//     async () => findAndUpdateOne(Doctor, 12, 'name', 'Andrew Park'),
//     async () => findAndUpdateOne(Doctor, 12, { name: 'Andrew Park' }),
// ];
