function docLoaded(fn) {
    "use strict";
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

function MakeTable(tableID, tableWith, tableColumns, tableRows) {
    var table = document.getElementById(tableID);
    table.style.width = tableWith;
    table.style.border = "1px solid black";
    var row = table.insertRow(0);
    var btnRow = table.insertRow(-1);
    for(var i = 0; i < tableColumns; i++){
        var cell = row.insertCell(-1);
        var btnCell = btnRow.insertCell(-1);
        var btn = document.createElement("button");
        btn.innerHTML = 'Välj';
        btn.setAttribute('id', 'test');
        //btn.setAttribute('onclick', btnPress());
        btn.onclick = function() {btnPress()};
        btnCell.appendChild(btn);
        cell.innerHTML = "test";
    }
}

function AddOrder(tableID, maxColumns) {
    var table = document.getElementById(tableID);
    var row = table.rows[0];
    var rows = table.rows.length;
    var btnRow = table.rows[rows-1];
    var cells = row.cells.length;
    if(cells < maxColumns){
        var cell = row.insertCell(-1);
        cell.innerHTML = "TEST";
        cell = btnRow.insertCell(-1);
        var btn = document.createElement("button");
        btn.innerHTML = 'Välj';
        cell.appendChild(btn);
    }
}

function btnPress() {
    document.getElementById("inProgress").style.backgroundColor = "red";
}

function Main() {
    MakeTable('inProgress', '70%', 3);
    MakeTable('nextItem', '30%', 1);
    MakeTable('readyOrder', '100%', 1);
    AddOrder('inProgress', 5);
}