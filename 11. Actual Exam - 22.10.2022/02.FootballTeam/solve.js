class footballTeam { //FootballTeam !!!!!!!!!!!

    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) { // array of strings

        let returnValue = 'You successfully invite ';
        let arrOfNames = [];

        for (const playerInfo of footballPlayers) {
            //"{name}/{age}/{playerValue}"
            let name = playerInfo.split('/')[0];
            let age = Number(playerInfo.split('/')[1]);  // Number 
            let playerValue = Number(playerInfo.split('/')[2]); // Number 

            let searchedPlayer = this.invitedPlayers.find(p => p.name === name);

            if (searchedPlayer) {
                if (searchedPlayer.playerValue < playerValue) {
                    searchedPlayer.playerValue = playerValue;
                }
            }
            else {
                this.invitedPlayers.push({ name, age, playerValue });
            }

            arrOfNames.push(name);
        }

        //"You successfully invite {name1}, {name2}, …{nameN}."

        returnValue += arrOfNames.join(', ');

        returnValue += '.';
        return returnValue;
    }

    signContract(selectedPlayer) { //string
        //"{name}/{playerOffer}"
        let name = selectedPlayer.split('/')[0];
        let playerOffer = Number(selectedPlayer.split('/')[1]);//

        let searchedPlayer = this.invitedPlayers.find(p => p.name === name);

        if (!searchedPlayer) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (playerOffer < searchedPlayer.playerValue) {
            let priceDifference = Number(searchedPlayer.playerValue - playerOffer);
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`);
        }

        searchedPlayer.playerValue = "Bought";

        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
    }

    ageLimit(name, age) { //string, Number

        let searchedPlayer = this.invitedPlayers.find(p => p.name === name);

        if (!searchedPlayer) {
            throw new Error(`${name} is not invited to the selection list`);
        }

        if (searchedPlayer.age < age) {

            let difference = age - searchedPlayer.age;

            if (difference < 5) {
                return `${name} will sign a contract for ${difference} years with ${this.clubName} in ${this.country}!`;
            }
            else if (difference > 5) { //samo else da go  napraq ? shtoto => 5 ????
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
        }

        return `${name} is above age limit!`;
    }

    transferWindowResult() {
        let resArr = ["Players list:"];

        this.invitedPlayers = this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name));

        for (const currPlayer of this.invitedPlayers) {
            resArr.push(`Player ${currPlayer.name}-${currPlayer.playerValue}`);
        }

        return resArr.join('\n');
    }
}

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Lionel Messi/60"));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.signContract("Barbukov/10"));

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.ageLimit("Lionel Messi", 33 ));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.ageLimit("Pau Torres", 26));
// console.log(fTeam.signContract("Kylian Mbappé/240"));

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.transferWindowResult());
