function makesomedivs(i, j) { 
    var rows = new Array();

    for (var x=0; x==i; x++) {
        rows[x] = document.createElement("tr");
    }

    for (var x=0; x==j; x++) {
        var newTd = document.createElement("td");
        var newDiv = document.createElement("div");
        newDiv.setAttribute("class", "tableHorizontal");
        newTd.appendChild(newDiv);
        rows[x].appendChild(newTd);
    }

    var table = document.getElementById("tables");
    
    for (var x = 0; x<=rows.length; x++) {
        //table.appendChild(rows[x]);
        console.log(typeof(rows[x]));
    }
    console.log(rows.length);
}

function test(i, j) {
    var rows = new Array();
    console.log(rows);
    var a = document.createElement("table");
    rows.push(a);
    console.log(rows);

    for (var x=0; x<i; x++) {
        //rows[x] = "hej";
        //rows.push("hej");
        console.log(rows);
    }
    console.log(rows[0]);

    for (var x=0; x==rows.length; x++) {
        console.log(rows);
    }

    for (var x=0; x==rows.length; x++) {
        rows[x].appendChild(document.createElement("tr"));
    }
    console.log(rows[0]);
}

function createTable(rows,columns) {
    var table = document.getElementById("dinnerTables");
    var rows = new Array();
    
    //create rows
    for (var x=0; x<rows; x++) {
        var tr = document.createElement("tr");
        addCells(tr);  
        rows[x] = tr;

    }
    
    //add tds with divs for one tr
    function addCells(tr) {
        for (var x=0; x<columns; x++) {
           var newTd = document.createElement("td");
           var newDiv = document.createElement("div");
           newDiv.setAttribute("class","tableHorizontal");
           newTd.appendChild(newDiv);
           tr.appendChild(newTd);    
        }
    }

    //add all the trs to the maintable
    for (var x=0; x<rows.length; x++) {
       tables.appendChild(rows[x]); 
    }

    return table; 
}

function testArrays() {
    var testarray = new Array(); 
    console.log(typeof(testarray[0]));
    console.log(testarray.length);
    var newTable = document.createElement("table");
    testarray[0] = newTable;
    console.log(typeof(testarray[0]));
    console.log(testarray.length);

    var testarray2 = new Array("1",2,3,4);
    console.log("type of array: " + typeof(testarray2));
    console.log("type inside array at 0: " + typeof(testarray2[0]));
    console.log("type inside array at 1: " + typeof(testarray2[1]));
    testarray2[2] = document.createElement("table");
    console.log("type inside array at 2: " + typeof(testarray2[2]));
    testarray2[3] = document.createElement("div");
    console.log("type inside array at 3: " + typeof(testarray2[3]));
    
    var table = createTable();
    table.appendChild(document.createTextNode("hej"));
}



