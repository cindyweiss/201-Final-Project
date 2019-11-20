


var render = function () {

  // var score = document.getElementById('score');
  var tableContents = document.getElementById('scores');
  var tr = document.createElement('tr');
  var nameCell = document.createElement('td');
  nameCell.textContent = this.name;
  tr.append(nameCell);

  var matchCount = document.createElement('td');
  matchCount.textContent = this.userHistory;
  tr.append(matchCount);

  tableContents.append(tr);
};