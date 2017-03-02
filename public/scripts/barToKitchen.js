'use strict';
var order = function(orderNum, tableNum, items) {
    this.orderId = orderNum;
    this.tableId = tableNum;
    this.items = items;
    this.state = 1; //0 - done, 1 - queue, 2 - in progress, 3 "the nothing state"
}

var foodi = function(id, label, price, removed) {
    this.menuID = id;
    this.type = food;
    this.label = label;
    this.price = price;
    this.removed = removed;
    this.special = false
}

new Vue ({
    el: '#mainID',
    mixins: [sharedVueData],
    data: {
	items: drinks,
	fooditems: food,
	checkout : [],
	toKitchen: [],
	total: 0
    },
    methods : {

	dropdown : function() {
	        document.getElementById("myDropdown").classList.toggle("show");
	},
	sendItem : function(item) {
	
	    this.checkout.push(item);
	    this.total += item.price;
	    if(item.type === "food") {

		var checkboxes = document.getElementsByName(item.menuID);
		for (var i=0; i < checkboxes.length; i++) {
		    if(!checkboxes[i].checked) {
			item.removed.push(checkboxes[i].value)
		    }
		}
		var nitem = new foodi(item.menuID, item.label, item.price, item.removed);
		if(nitem.removed.length != 0) {
		    nitem.special = true;
		}
		this.toKitchen.push(nitem);
		console.log(this.toKitchen.length)
		for (var i=0; i < checkboxes.length; i++) {
		    if(!checkboxes[i].checked) {
			checkboxes[i].checked = "checked"
		    }
		}
		item.removed = []
	    }
	},
	recieveItem : function(item) {
	    var index = this.checkout.indexOf(item);
	    
	    if(index > -1) {
		this.checkout.splice(index, 1);
		this.total -= item.price;
	    }
	    if(item.type === "food") {
		var kitchenIndex = this.toKitchen.indexOf(item);
		if(kitchenIndex > -1) {
		    this.toKitchen.splice(kitchenIndex, 1);
		}
	    }
	},

	sendToKitchen : function(tableNr, orderNr) {
	    if(!isNaN(tableNr) && this.toKitchen.length !== 0) {
		socket.emit('tableNr', tableNr);
		var foobar = new order(orderNr, tableNr, this.toKitchen)
		socket.emit('order', foobar);
		this.toKitchen = [];
		this.checkout = [];
	    }
	    else {
		this.toKitchen = [];
		this.checkout = [];
	    }
	}
    }
    
})
