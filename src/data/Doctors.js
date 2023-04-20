export const doctors = [
    {
        id: 1,
        name: 'Alice Johnson',
        specialtyId: [1, 14],
        clinicId: [2],
        availableTimeslots: ['9am-10am', '11.30am-12am', '2pm-3pm'],
        worksWithVhi: true,
        worksWithKids: false,
        education: 'Graduated from Harvard Medical School',
        certificates: 'American Board of Internal Medicine, American Board of Pediatrics',
        professionalInterests: 'Preventive medicine, chronic disease management',
        smallPhoto:
            'https://lahtaclinic.ru/wp-content/uploads/2017/11/docs-mini-ava-150x150.png',
        largePhoto:
            'https://lahtaclinic.ru/wp-content/uploads/2022/10/%D0%B0%D0%BB%D0%B0%D0%B8%D0%B4-683x1024-1.png',
        price: 175,
    },
    {
        id: 2,
        name: 'John Smith',
        specialtyId: [2, 13],
        clinicId: [1, 2],
        availableTimeslots: ['8am-9am', '1pm-2pm', '4pm-5pm'],
        worksWithVhi: true,
        worksWithKids: true,
        education: 'Graduated from Stanford School of Medicine',
        certificates:
            'American Board of Family Medicine, American Board of Preventive Medicine',
        professionalInterests: 'Primary care, health promotion and disease prevention',
        smallPhoto:
            'https://lahtaclinic.ru/wp-content/uploads/2017/11/docs-mini-ava-150x150.png',
        largePhoto:
            'https://lahtaclinic.ru/wp-content/uploads/2022/10/%D0%B0%D0%BB%D0%B0%D0%B8%D0%B4-683x1024-1.png',
        price: 125,
    },
    {
        id: 3,
        name: 'Emma Brown',
        specialtyId: [11],
        clinicId: [2, 3],
        availableTimeslots: ['10am-11am', '12pm-1pm', '3pm-4pm'],
        worksWithVhi: false,
        worksWithKids: true,
        education: 'Graduated from Yale School of Medicine',
        certificates: 'American Board of Obstetrics and Gynecology',
        professionalInterests: "Women's health, reproductive health, family planning",
        smallPhoto:
            'https://lahtaclinic.ru/wp-content/uploads/2017/11/docs-mini-ava-150x150.png',
        largePhoto:
            'https://lahtaclinic.ru/wp-content/uploads/2022/10/%D0%B0%D0%BB%D0%B0%D0%B8%D0%B4-683x1024-1.png',
        price: 225,
    },
    {
        id: 4,
        name: 'Michael Lee',
        specialtyId: [1, 4],
        clinicId: [1, 2],
        availableTimeslots: ['9am-10am', '11am-12pm', '2pm-3pm', '4pm-5pm'],
        worksWithVhi: true,
        worksWithKids: false,
        education:
            'Graduated from University of California, San Francisco School of Medicine',
        certificates: 'American Board of Dermatology, American Board of Pediatrics',
        professionalInterests:
            'Skin cancer prevention and treatment, pediatric dermatology',
        smallPhoto:
            'https://lahtaclinic.ru/wp-content/uploads/2017/11/docs-mini-ava-150x150.png',
        largePhoto:
            'https://lahtaclinic.ru/wp-content/uploads/2022/10/%D0%B0%D0%BB%D0%B0%D0%B8%D0%B4-683x1024-1.png',
        price: 175,
    },
    {
        id: 5,
        name: 'Jennifer Chen',
        specialtyId: [5],
        clinicId: [1],
        availableTimeslots: ['9am-10am', '11am-12pm', '2pm-3pm', '4pm-5pm'],
        worksWithVhi: false,
        worksWithKids: true,
        education:
            'Graduated from University of Pennsylvania Perelman School of Medicine',
        certificates: 'American Board of Ophthalmology',
        professionalInterests: 'Pediatric ophthalmology, strabismus, amblyopia',
        smallPhoto:
            'https://lahtaclinic.ru/wp-content/uploads/2017/11/docs-mini-ava-150x150.png',
        largePhoto:
            'https://lahtaclinic.ru/wp-content/uploads/2022/10/%D0%B0%D0%BB%D0%B0%D0%B8%D0%B4-683x1024-1.png',
        price: 175,
    },
    {
        id: 6,
        name: 'David Kim',
        specialtyId: [3, 7],
        clinicId: [1],
        availableTimeslots: ['8am-9am', '12pm-1pm', '3pm-4pm'],
        worksWithVhi: true,
        worksWithKids: true,
        education:
            'Graduated from Columbia University Vagelos College of Physicians and Surgeons',
        certificates:
            'American Board of Neurology, American Board of Psychiatry and Neurology',
        professionalInterests:
            'Child and adolescent psychiatry, neurodevelopmental disorders',
        smallPhoto:
            'https://lahtaclinic.ru/wp-content/uploads/2017/11/docs-mini-ava-150x150.png',
        largePhoto:
            'https://lahtaclinic.ru/wp-content/uploads/2022/10/%D0%B0%D0%BB%D0%B0%D0%B8%D0%B4-683x1024-1.png',
        price: 150,
    },
    {
        id: 7,
        name: 'Sarah Davis',
        specialtyId: [1, 6],
        clinicId: [3, 4],
        availableTimeslots: ['9am-10am', '11am-12pm', '2pm-3pm', '4pm-5pm'],
        worksWithVhi: true,
        worksWithKids: true,
        education: 'Graduated from University of Michigan Medical School',
        certificates:
            'American Board of Pediatrics, American Board of Allergy and Immunology',
        professionalInterests: 'Pediatric allergy and immunology, food allergy, asthma',
        smallPhoto:
            'https://lahtaclinic.ru/wp-content/uploads/2017/11/docs-mini-ava-150x150.png',
        largePhoto:
            'https://lahtaclinic.ru/wp-content/uploads/2022/10/%D0%B0%D0%BB%D0%B0%D0%B8%D0%B4-683x1024-1.png',
        price: 125,
    },
    {
        id: 8,
        name: 'Robert Wilson',
        specialtyId: [8],
        clinicId: [2, 4],
        availableTimeslots: ['9am-10am', '11am-12pm', '2pm-3pm', '4pm-5pm'],
        worksWithVhi: true,
        worksWithKids: true,
        education: 'Graduated from University of Texas Southwestern Medical School',
        certificates:
            'American Board of Pediatrics, American Board of Pediatric Cardiology',
        professionalInterests: 'Pediatric cardiology, congenital heart disease',
        smallPhoto:
            'https://lahtaclinic.ru/wp-content/uploads/2017/11/docs-mini-ava-150x150.png',
        largePhoto:
            'https://lahtaclinic.ru/wp-content/uploads/2022/10/%D0%B0%D0%BB%D0%B0%D0%B8%D0%B4-683x1024-1.png',
        price: 175,
    },
    {
        id: 9,
        name: 'Laura Martinez',
        specialtyId: [9, 1],
        clinicId: [4],
        availableTimeslots: ['8am-9am', '12pm-1pm', '3pm-4pm'],
        worksWithVhi: false,
        worksWithKids: true,
        education:
            'Graduated from University of California, Los Angeles David Geffen School of Medicine',
        certificates: 'American Board of Pediatrics',
        professionalInterests: 'Pediatric emergency medicine, trauma',
        smallPhoto:
            'https://lahtaclinic.ru/wp-content/uploads/2017/11/docs-mini-ava-150x150.png',
        largePhoto:
            'https://lahtaclinic.ru/wp-content/uploads/2022/10/%D0%B0%D0%BB%D0%B0%D0%B8%D0%B4-683x1024-1.png',
        price: 225,
    },
    {
        id: 10,
        name: 'William Yang',
        specialtyId: [10, 14],
        clinicId: [2, 3],
        availableTimeslots: ['9am-10am', '11am-12pm', '2pm-3pm', '4pm-5pm'],
        worksWithVhi: true,
        worksWithKids: false,
        education: 'Graduated from University of Chicago Pritzker School of Medicine',
        certificates:
            'American Board of Internal Medicine, American Board of Gastroenterology',
        professionalInterests: 'Gastroenterology, inflammatory bowel disease, nutrition',
        smallPhoto:
            'https://lahtaclinic.ru/wp-content/uploads/2017/11/docs-mini-ava-150x150.png',
        largePhoto:
            'https://lahtaclinic.ru/wp-content/uploads/2022/10/%D0%B0%D0%BB%D0%B0%D0%B8%D0%B4-683x1024-1.png',
        price: 150,
    },
    {
        id: 11,
        name: 'Olivia Kim',
        specialtyId: [11],
        clinicId: [2, 4],
        availableTimeslots: ['10am-11am', '12pm-1pm', '3pm-4pm'],
        worksWithVhi: false,
        worksWithKids: true,
        education: 'Graduated from University of Washington School of Medicine',
        certificates:
            'American Board of Pediatrics, American Board of Pediatric Hematology/Oncology',
        professionalInterests: 'Pediatric hematology/oncology, leukemia, lymphoma',
        smallPhoto:
            'https://lahtaclinic.ru/wp-content/uploads/2017/11/docs-mini-ava-150x150.png',
        largePhoto:
            'https://lahtaclinic.ru/wp-content/uploads/2022/10/%D0%B0%D0%BB%D0%B0%D0%B8%D0%B4-683x1024-1.png',
        price: 150,
    },
    {
        id: 12,
        name: 'Andrew Park',
        specialtyId: [12],
        clinicId: [1, 3],
        availableTimeslots: ['9am-10am', '11am-12pm', '2pm-3pm', '4pm-5pm'],
        worksWithVhi: true,
        worksWithKids: false,
        education:
            'Graduated from University of California, San Diego School of Medicine',
        certificates: 'American Board of Surgery, American Board of Plastic Surgery',
        professionalInterests:
            'Plastic and reconstructive surgery, breast reconstruction, hand surgery',
        smallPhoto:
            'https://lahtaclinic.ru/wp-content/uploads/2017/11/docs-mini-ava-150x150.png',
        largePhoto:
            'https://lahtaclinic.ru/wp-content/uploads/2022/10/%D0%B0%D0%BB%D0%B0%D0%B8%D0%B4-683x1024-1.png',
        price: 225,
    },
];
