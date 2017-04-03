import database from '../app.service';

export default class LeaderboardService {
    getLeaderboard(username) {
        let users = [];
        return database.ref('users').once('value', (snapshot) => {
            snapshot.forEach((userSnapshot) => {
                users.push(userSnapshot.val())
            });
        }).then(() => users.sort((user1, user2) => user1.score < user2.score));
    }
}