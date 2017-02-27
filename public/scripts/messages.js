'use strict';

var socket = io();

var sharedVueData = {
    data: {
	TableNr : 0,
	OrderNr : 0,
	Orders : [],
    },
    created: function(){
	socket.on('currentTable', function(nr) {
	    this.TableNr = nr;
	}.bind(this));

	socket.on('currentOrder', function() {
	    this.OrderNr += 1;
	}.bind(this));

	
	socket.on('currentQueue', function(orders) {
	    this.Orders = orders;
	}.bind(this));
    }
};
