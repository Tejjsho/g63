'use strict';

new Vue ({
    el: '#mainID',
    mixins: [sharedVueData],
    data: {
	fooditems: food, //this should be the list containing the new orders from bar
	readyList : [],
	inProgList: []
    },
    methods : {
	
	sendItem : function(listTo, item) {
	    listTo.push(item);
	},
	readyOrder : function(item) {
	    var index = this.readyList.indexOf(item);
	    if(index > -1) {
		this.readyList.splice(index, 1);
	    }
	},
    inProgOrder : function(item) {
	    var index = this.inProgList.indexOf(item);
	    if(index > -1) {
		this.inProgList.splice(index, 1);
        this.readyList.push(item);
	    }
	}
    }
    
})