// render header row; start with blank
// function renderHours(domReference) {
//     var tr = document.createElement('tr');
//     var th = document.createElement('th');
//     th.textContent = '';
//     tr.appendChild(th);

//     for (var storeHoursIndex = 0; storeHoursIndex < storeHours.length; storeHoursIndex++) {
//         th = document.createElement('th');
//         th.textContent = storeHours[storeHoursIndex];
//         tr.append(th);
//     }
//     th = document.createElement('th');
//     th.textContent = 'Totals';
//     tr.appendChild(th);
//     domReference.append(tr);
// }



var render = function() {

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