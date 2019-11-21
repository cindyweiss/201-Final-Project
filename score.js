// render header row; start with blank
// function renderHours(domReference) {
//     var tr = document.createElement('tr');
//     var th = document.createElement('th');
//     th.textContent = '';
//     tr.appendChild(th);

var renderTitleRow = function (domreferance) {
  var tableContents = document.getElementById('scores');
  var tr = document.createElement('tr');
  var userNames = document.createElement('td');
  userNames.textContent = (' Squires Names ');
  tr.append(userNames);

  var td = document.createElement('td');
  td.textContent = (' Squires Games Won / Squires Games Played ');
  tr.append(td);

  tableContents.append(tr);
};

var SCORE_DATA = 'SCORE_DATA';

var render = function (user) {

  var tableContents = document.getElementById('scores');
  var tr = document.createElement('tr');
  var nameCell = document.createElement('td');
  nameCell.textContent = user.name;
  tr.append(nameCell);

  var matchCount = document.createElement('td');
  matchCount.textContent = user.winLossHistory;
  tr.append(matchCount);
  console.log(this);
  tableContents.append(tr);
};

var jsonData = localStorage.getItem(SCORE_DATA);
var dataForHighScores = JSON.parse(jsonData);
renderTitleRow();
for (var i = 0; i < dataForHighScores.length; i++) {
  render(dataForHighScores[i]);
}
