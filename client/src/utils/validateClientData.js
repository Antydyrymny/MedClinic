export function validateClientData(client, params) {
    const { surname, name, birthday, email, telephone, password } = params;

    if (
        (surname && !client.surname.length) ||
        (name && !client.name.length) ||
        (birthday && client.birthday.length < 10) ||
        (email && !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/.test(client.email)) ||
        (telephone && client.telephone.length < 18) ||
        (password && client.password.length < 4)
    )
        return false;
    else return true;
}
