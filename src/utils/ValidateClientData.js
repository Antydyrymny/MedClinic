export function validateClientForm(client, params) {
    const { surname, name, birthday, email, telephone } = params;
    if (
        (surname && !client.surname.length) ||
        (name && !client.name.length) ||
        (birthday && client.birthday.length < 10) ||
        (email && !client.email.includes('@')) ||
        (telephone && client.telephone < 18)
    )
        return false;
    else return true;
}
