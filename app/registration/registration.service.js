import database from '../app.service';

export default class RegistrationService {
    registerUser(username) {
        let usersInDb;
        return database.ref('users').once('value', (snapshot) => {
            usersInDb = snapshot.numChildren();
        }).then(() => {
            usersInDb = usersInDb + 1;
            return database.ref('users/' + usersInDb).set({
                username,
                id: usersInDb
            }).then(() => usersInDb);
        });
    }
}