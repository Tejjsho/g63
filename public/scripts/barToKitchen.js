'use strict';
var order = function(orderNum, tableNum, items) {
    this.orderId = orderNum;
    this.tableId = tableNum;
    this.items = items;
    this.state = 1; //0 - done, 1 - queue, 2 - in progress, 3 "the nothing state"
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
	
	sendItem : function(item) {
	    this.checkout.push(item);
	    this.total += item.price;
	    if(item.type === "food") {
		this.toKitchen.push(item);
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
	}
    }
    
})
