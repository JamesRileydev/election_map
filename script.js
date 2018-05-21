class Politician {
  constructor(name, partyColor) {
    this.name = name;
    this.partyColor = partyColor;
    this.electionResults = null;
    this.totalVotes = 0;
  }

  announce() {
    console.log(this.name);
  }

  voteTally() {
    this.totalVotes = 0;
    for (var i = 0; i < this.electionResults.length; i++) {
      this.totalVotes = this.totalVotes + this.electionResults[i];
    }
    console.log(this.totalVotes);
    return this.totalVotes;
  }

};

var polly = new Politician("Polly Tishon", [132, 17, 11]);
var barry = new Politician("Barry Phishy", [245, 141, 136]);

polly.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
barry.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

polly.electionResults[9] = 1;
polly.electionResults[4] = 17;
polly.electionResults[43] = 11;

barry.electionResults[9] = 28;
barry.electionResults[4] = 38;
barry.electionResults[43] = 27;

function setStateResults(state) {
  theStates[state].winner = null;

  if (polly.electionResults[state] > barry.electionResults[state]) {
    theStates[state].winner = polly;
  } else if (polly.electionResults[state] < barry.electionResults[state]) {
    theStates[state].winner = barry;
  }

  var stateWinner = theStates[state].winner;

  if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;
  } else {
    theStates[state].rgbColor = [11, 32, 57];
  }

  var stateResults = document.getElementById('stateResults');
  var stateHeader = stateResults.children[0].children[0];
  stateHeader.children[0].innerText = theStates[state].nameFull;
  stateHeader.children[1].innerText = theStates[state].nameAbbrev;
  var stateBody =  stateResults.children[1];
  var candidate1name = stateBody.children[0].children[0];
  var candidate1results = stateBody.children[0].children[1];
  var candidate2name = stateBody.children[1].children[0];
  var candidate2results = stateBody.children[1].children[1];
  var winnerName = stateBody.children[2].children[1];

  candidate1name.innerText = barry.name;
  candidate1results.innerText = barry.electionResults[state];
  candidate2name.innerText = polly.name;
  candidate2results.innerText = polly.electionResults[state];

  if (stateWinner === null) {
     winnerName.innerText = 'Draw';
  } else {
    winnerName.innerText = stateWinner.name;
  }

}

polly.voteTally();
barry.voteTally();

function winner() {
  if (polly.totalVotes < barry.totalVotes) {
    winner = barry.name;
  } else if (polly.totalVotes > barry.totalVotes) {
    winner = polly.name;
  } else {
    console.log("Tie");
  }
  console.log("The winner is " + winner);
}
winner();

var countryResults = document.getElementById('countryResults');
var row1 = countryResults.children[0].children[0]

row1.children[0].innerText = barry.name;
row1.children[1].innerText = barry.totalVotes;
row1.children[2].innerText = polly.name;
row1.children[3].innerText = polly.totalVotes;
row1.children[4].innerText = "Winner";
row1.children[5].innerText = winner;







