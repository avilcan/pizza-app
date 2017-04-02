import database from '../app.service';

export default class GameService {
  constructor($http) {
    this.maxScore = 0;
    this.userScore = 0;
  }

  getRandomWord() {
    const that = this;
  	return database.ref('words').once('value').then((snapshot) => {
      const numOfWordsInDb = snapshot.numChildren();
      const rand = Math.floor(Math.random() * (numOfWordsInDb)) + 1;
      const word = snapshot.child(rand).val();
      that.maxScore = Math.floor(Math.pow(1.95, word.length / 3));
      return word;
    });
  }

  getFinalScore() {
    return this.userScore;
  }

  computeScoreForSolution(fails) {
    let userScore = this.maxScore - fails;
    
    if (userScore < 0) {
      userScore = 0;
    }

    this.userScore = this.userScore + userScore;
    
    return {
      maxScore: this.maxScore,
      userScore,
    }
  }

  storeResults(userId) {
    return database.ref(`users/${userId}/score`).set(this.userScore);
  }
}