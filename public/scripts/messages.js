'use strict';

var socket = io();

var sharedVueData = {
    data: {
	TableNr : 0,
	OrderNr : 0
    },
    created: function(){
	socket.on('currentTable', function(nr) {
	    this.TableNr = nr;
	}.bind(this));

	socket.on('currentOrder', function() {
	    this.OrderNr += 1;
	}.bind(this));
    }
};
