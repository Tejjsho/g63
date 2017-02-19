'use strict';

new Vue ({
    el: '#mainID',
    mixins: [sharedVueData],
    data: {
	wow : 30,
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
	}
    }
    
})
