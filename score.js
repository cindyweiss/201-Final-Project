
var SCORE_DATA = 'storeData';

var render = function () {

  // var score = document.getElementById('score');
  var tableContents = document.getElementById('scores');
  var tr = document.createElement('tr');
  var nameCell = document.createElement('td');
  nameCell.textContent = this.name;
  tr.append(nameCell);

  var matchCount = document.createElement('td');
  matchCount.textContent = this.scoreData;
  tr.append(matchCount);

  tableContents.append(tr);

};

render();

var jsonData = localStorage.getItem(SCORE_DATA);
var dataForHighScores = JSON.parse(jsonData);



function renderFromLocal(a, b) {

  a = dataForHighScores[0];
  b = dataForHighScores[1];

  var tableContents = document.getElementById('scores');
  var tr = document.createElement('tr');
  var nameCell = document.createElement('td');
  nameCell.textContent = this.a;
  tr.append(nameCell);

  var matchCount = document.createElement('td');
  matchCount.textContent = this.b;
  tr.append(matchCount);

  tableContents.append(tr);

}

renderFromLocal(dataForHighScores[0], dataForHighScores[1]);

// for (var i = 0; i < data.length; i++) {
//   var newUser = new userHistory('', '');

//   newUser.loadData(data[i]);
//   localStorage.push(newUser);
// }

