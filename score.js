// render header row; start with blank
// function renderHours(domReference) {
//     var tr = document.createElement('tr');
//     var th = document.createElement('th');
//     th.textContent = '';
//     tr.appendChild(th);

var SCORE_DATA = 'SCORE_DATA';

var render = function(user) {

  var tableContents = document.getElementById('scores');
  var tr = document.createElement('tr');
  var nameCell = document.createElement('td');
  nameCell.textContent = user.name;
  tr.append(nameCell);

  var matchCount = document.createElement('td');
  matchCount.textContent = user.winLossHistory;
  tr.append(matchCount);
  tableContents.append(tr);
};

var jsonData = localStorage.getItem(SCORE_DATA);
var dataForHighScores = JSON.parse(jsonData);
for (var i = 0; i < dataForHighScores.length; i++) {
  render(dataForHighScores[i]);
}

render();

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
