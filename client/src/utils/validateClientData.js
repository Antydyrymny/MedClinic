export function validateClientData(client, params) {
    const { surname, name, birthday, email, telephone, password } = params;

    if (
        (surname && !client.surname.length) ||
        (name && !client.name.length) ||
        (birthday && client.birthday.length < 10) ||
        (email &&
            !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                client.email.toLowerCase()
            )) ||
        (telephone && client.telephone.length < 18) ||
        (password && client.password.length < 4)
    )
        return false;
    else return true;
}
