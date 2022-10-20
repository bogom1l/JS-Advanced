class SmartHike {

    constructor(username) {
        this.username = username;
        this.goals = {}; // goals[peak] = altitude;
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {

        if (this.goals[peak] != Number(altitude)) { // ?
            this.goals[peak] = Number(altitude);
            return `You have successfully added a new goal - ${peak}`;
        }
        else {
            return `${peak} has already been added to your goals`;
        }
    }

    hike(peak, time, difficultyLevel) {

        if (!this.goals[peak]) { // ?
            throw new Error(`${peak} is not in your current goals`);
        }
        else if (this.resources <= 0) {
            throw new Error("You don't have enough resources to start the hike");
        }

        let difference = Number(this.resources) - Number(time) * 10;
        if (difference < 0) {
            return "You don't have enough resources to complete the hike";
        }

        this.resources = Number(this.resources) - Number(time) * 10; // difference // ?

        this.listOfHikes.push({ peak, time, difficultyLevel });

        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
    }

    rest(time) {
        this.resources += Number(time) * 10;

        if (this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        }

        return `You have rested for ${time} hours and gained ${time * 10}% resources`;
    }

    showRecord(criteria) {

        if (this.listOfHikes.length === 0) {
            return `${this.username} has not done any hiking yet`;
        }

        if (!this.listOfHikes.find(h => h.difficultyLevel === criteria) && criteria !== 'all') {
            return `${this.username} has not done any ${criteria} hiking yet`;
        }

        if (criteria == 'all') {
            let resArr = ["All hiking records:"];

            for (const hike of this.listOfHikes) {
                resArr.push(`${this.username} hiked ${hike.peak} for ${hike.time} hours`);
            }

            return resArr.join('\n');
        }

        //'easy' / 'hard'
        this.listOfHikes = this.listOfHikes.filter(h => h.difficultyLevel === criteria);
        let bestHike = this.listOfHikes.sort((a, b) => a.localeCompare(b))[0];

        return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`;
    }

}

// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.addGoal('Musala', 2925));

// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.hike('Rui', 3, 'easy'));
// console.log(user.hike('Everest', 12, 'hard'));

// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.rest(4));
// console.log(user.rest(5));

// const user = new SmartHike('Vili');
// console.log(user.showRecord('all'));

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');

console.log(user.showRecord('easy'));



user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');

console.log(user.showRecord('hard'));



user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');

console.log(user.showRecord('all'));
