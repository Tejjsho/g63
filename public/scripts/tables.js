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

    for (var x=0; x<=i; x++) {
        //rows[x] = "hej";
        //rows.push("hej");
        console.log("added a hej");
    }
    for (var x=0; x==rows.length; x++) {
        //console.log("nhej");
    }
}

function createTable() {
    var table = document.getElementById("tables");
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



