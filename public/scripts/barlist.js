function Drink(name, cl, price) {
    this.name = name;
    this.cl = cl;
    this.price = price;
    this.toString = function() {
        return this.name + ': ' + this.price + ' kr.';
    }
    
};

var arr = [];

var b1 = new Drink("Öl", 50, 25);
var b2 = new Drink("Guiness", 50, 45)

arr.push(b1);
arr.push(b2);

function displayItems() {
    while(arr.length > 0) {
        var item = arr.pop();
        
        var button = document.createElement("button");        
        
        button.innerHTML = item.name;
        button.setAttribute("class", "menuButton");
        button.setAttribute('id', item.toString());
        
        
        document.getElementById('mainID').appendChild(button);
        button = document.getElementById(item.toString());
        button.onclick = function() {sendItem(item)};
        
        

    }
};

function docLoaded(fn) {
    if (document.readyState !== 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

function indexPageLoaded() {
    displayItems();
}

function sendItem(item) {
    console.log(item.toString());
    
}