export function validateClientData(client, params) {
    const { surname, name, birthday, email, telephone } = params;
    if (
        (surname && !client.surname.length) ||
        (name && !client.name.length) ||
        (birthday && client.birthday.length < 10) ||
        (email && !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/.test(client.email)) ||
        (telephone && client.telephone.length < 18)
    )
        return false;
    else return true;
}
