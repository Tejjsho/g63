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
	    //listTo.push(item);
	    socket.emit('orderNext', item.orderId);
	},
	readyOrder : function(item) {
	    socket.emit('orderNext', item.orderId);
	    socket.emit('orderNext', item.orderId);
	    socket.emit('orderNext', item.orderId);
	    // var index = this.readyList.indexOf(item);
	    // if(index > -1) {
	    // 	this.readyList.splice(index, 1);
	    // }
	},
	inProgOrder : function(item) {
	    socket.emit('orderDone', item.orderId);
	//     var index = this.inProgList.indexOf(item);
	//     if(index > -1) {
	// 	this.inProgList.splice(index, 1);
        // this.readyList.push(item);
	    }
	}
    
    
})

function format_output(order) {
    //this.orderId = orderNum;
    //this.tableId = tableNum;
    //this.items = items;
    //this.state = 1; //0 - done, 1 - queue, 2 - in progress, 3 "the nothing state"
    console.log(order.item);
}

var scale = Math.min( 
    availableWidth / contentWidth, 
    availableHeight / contentHeight 
    );
