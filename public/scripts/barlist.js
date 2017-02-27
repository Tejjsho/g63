function displayItems() {
    for(i = 0; i < drinks.length; i++) {
        var item = drinks[i];
        
        var button = document.createElement("button");        
        
        button.innerHTML = '{{wow}}';
        button.setAttribute("class", "menuButton");
        button.setAttribute('id', 'drink');
	button.setAttribute('v-on:click', 'sendItem');       
        
        document.getElementById('menuList').appendChild(button);
        //button = document.getElementById(item.toString());
        //button.onclick = function() {console.log(drinks.price)};
        
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

