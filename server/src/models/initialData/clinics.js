import mongoose from 'mongoose';

export const clinicSchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    address: String,
    fullddress: String,
    coordinates: {
        lat: Number,
        lng: Number,
    },
    name: String,
    workHours: String,
    telephone: String,
    email: String,
    description: String,
    image: String,
    photos: [String],
});

export const Clinic = mongoose.model('Clinic', clinicSchema);

// export const clinics = [
//     {
//         id: 1,
//         address: '15 Oxford St, London',
//         fullddress: '15 Oxford St, London W1D 2EB, UK',
//         coordinates: { lat: 51.516324189466864, lng: -0.13123313155635366 },
//         name: 'FullStack Oxford Clinic',
//         workHours: '9:00 - 21:00',
//         telephone: '111-11-11',
//         email: 'oxford@fullstack.com',
//         description:
//             'The London Medical Center at 109-113 Mare St, London E8 4RU, UK, is a reputable healthcare facility in the vibrant neighborhood of Mare Street. It provides top-quality medical services in the heart of London. Easily accessible at street level, the clinic is conveniently located on Mare Street.\n' +
//             '        Public transportation options include Mare Street Station and Hackney Central Overground Station nearby. Parking facilities like NCP car park on Richmond Road or Q-Park car park on Amhurst Road are available. For inquiries or details, call 111-11-13.\n' +
//             '        The dedicated staff ensures a smooth experience. At the London Medical Center on Mare Street, highly experienced professionals offer a wide range of medical services using state-of-the-art facilities.',
//         image: 'https://i.imgur.com/gkVLdmP.jpg',
//         photos: [
//             'https://i.imgur.com/yUYlV4i.png',
//             'https://i.imgur.com/GZVB3JG.png',
//             'https://i.imgur.com/HNzsMtY.png',
//             'https://i.imgur.com/e104YS0.png',
//             'https://i.imgur.com/VDDGBNf.png',
//         ],
//     },
//     {
//         id: 2,
//         address: '123 Old Street, London',
//         fullddress: '123 Old Street, London EC1V 9LT, UK',
//         coordinates: { lat: 51.524791226004865, lng: -0.09406402971231864 },
//         name: 'FullStack Old Street Clinic',
//         workHours: '9:00 - 21:00',
//         telephone: '111-11-12',
//         email: 'oldstreet@fullstack.com',
//         description:
//             'The esteemed medical clinic at 123 Old Street, London EC1V 9LT, UK, offers comprehensive healthcare services in a convenient and accessible location. Situated in the vibrant area of Old Street, it serves as a hub for medical excellence in a modern building. \n' +
//             '        The main entrance is easily accessible at street level. Public transportation options include the nearby Old Street tube station and several bus routes. Parking facilities on Rivington Street and Paul Street are available. For inquiries, contact the reception desk at 111-11-12. \n' +
//             '        Skilled professionals deliver a wide range of healthcare services at the clinic, ensuring exceptional medical care for routine check-ups, specialized treatments, and urgent care needs.',
//         image: 'https://i.imgur.com/GWGAgpj.jpg',
//         photos: [
//             'https://i.imgur.com/03oaI7l.png',
//             'https://i.imgur.com/jxwoc51.png',
//             'https://i.imgur.com/gjnUPbx.png',
//             'https://i.imgur.com/56lsSXU.png',
//             'https://i.imgur.com/j9TGCol.png',
//         ],
//     },
//     {
//         id: 3,
//         address: '109-113 Mare St, London',
//         fullddress: '109-113 Mare St, London E8 4RU, UK',
//         coordinates: { lat: 51.53752099737588, lng: -0.05727418852581736 },
//         name: 'FullStack Mare Clinic',
//         workHours: '9:00 - 21:00',
//         telephone: '111-11-13',
//         email: 'mare@fullstack.com',
//         description:
//             'The London Medical Center at 109-113 Mare St, London E8 4RU, UK, is a reputable healthcare facility in the vibrant neighborhood of Mare Street. It delivers top-quality medical services in a modern clinic. Conveniently located on Mare Street, the entrance is easily accessible at street level. \n' +
//             '        Nearby tube stations include Mare Street Station and Hackney Central Overground Station. Parking options like NCP car park on Richmond Road or Q-Park car park on Amhurst Road are available. Contact the reception desk at 111-11-13 for inquiries. \n' +
//             '        Skilled and friendly staff provide necessary information for a smooth experience. The London Medical Center on Mare Street offers a wide array of medical services delivered by experienced professionals using state-of-the-art facilities. Trust their expertise for routine check-ups or specialized treatments.',
//         image: 'https://i.imgur.com/2iySJey.jpg',
//         photos: [
//             'https://i.imgur.com/GFl9fbs.png',
//             'https://i.imgur.com/3nxrn0k.png',
//             'https://i.imgur.com/QOrINQQ.png',
//             'https://i.imgur.com/evwDJ8o.png',
//             'https://i.imgur.com/q0AzGeX.png',
//         ],
//     },
//     {
//         id: 4,
//         address: '21-23 Conduit St, London',
//         fullddress: '21-23 Conduit St, London W1S 2XP, UK',
//         coordinates: { lat: 51.51253686965136, lng: -0.14234963532348188 },
//         name: 'FullStack Conduit Clinic',
//         workHours: '9:00 - 21:00',
//         telephone: '111-11-14',
//         email: 'conduit@fullstack.com',
//         description:
//             'The Conduit Street Medical Centre at 21-23 Conduit St, London W1S 2XP, UK, is a prominent healthcare facility in the vibrant city of London. It offers top-notch medical services in a contemporary building. Conveniently located on Conduit Street, the entrance ensures seamless access. \n' +
//             '        Oxford Circus and Bond Street tube stations are nearby for easy connectivity. Parking facilities like NCP car park on Grosvenor Hill or Q-Park car park on Cavendish Square are available. Contact the reception desk at 111-11-14 for inquiries. \n' +
//             '        The dedicated staff provides necessary information. The Conduit Street Medical Centre delivers an extensive range of medical services by experienced professionals using state-of-the-art facilities. Trust their expertise for routine check-ups or specialized treatments.',
//         image: 'https://i.imgur.com/6M5rOMQ.jpg',
//         photos: [
//             'https://i.imgur.com/Ss1Q6eI.png',
//             'https://i.imgur.com/4wC6oGA.png',
//             'https://i.imgur.com/nvBjC6X.png',
//             'https://i.imgur.com/YmSOjRd.png',
//             'https://i.imgur.com/2z42tto.png',
//         ],
//     },
// ];
