/* jslint node: true */
'use strict';

// Require express, socket.io, and vue
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

// Pick arbitrary port
var port = 3000;
app.set('port', (process.env.PORT || port));

//var getMenu = function() {
//  var menu = require(path.join(__dirname, "views/menu.json"));
//  return menu;
//};

// Store orders in a an anonymous class for now. 
var orders = function() {
    var orders = {};
    
    var addOrder = function(dish) {
	orders[dish.orderId] = dish;
	//orders[dish.orderId].items = dish.items;
	//orders[dish.orderId].state = 1;
	//orders[dish.orderId].table = dish.tableId;
	//orders[dish.orderId].order = dish.orderId;
    };

    var getAll = function() {
	return orders;
    };

    var markDone = function(orderId) {
	orders[orderId].state = 0;
    };


    var nextState = function(orderID) {
	orders[orderID].state += 1;
    };
    
    //expose functions
    return {
	addOrder : addOrder,
	getAll : getAll,
	markDone : markDone,
	nextState : nextState
    };
}(); // instantiate the class immediately

var tables = function() {
    var tablenr = 0;

    var getTableNr = function() {
	return tablenr;
    };

    var setTableNr = function(nr) {
	tablenr = nr;
    };

    return {
	getTableNr : getTableNr,
	setTableNr : setTableNr
    };
}();

// Serve static assets from public/
app.use(express.static(path.join(__dirname, 'public/')));
// Serve vue from vue/ directory
app.use('/vue', express.static(path.join(__dirname, '/node_modules/vue/dist/')));

// table.html = root
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'views/table.html'));
});

// Serve diner.html as root page
app.get('/bar', function(req, res) {
  res.sendFile(path.join(__dirname, 'views/bar.html'));
});
// Serve kitchen.html as subpage
app.get('/kitchen', function(req, res) {
  res.sendFile(path.join(__dirname, 'views/kitchen.html'));
});

io.on('connection', function(socket) {
    // Send list of orders and the menu when a client connects
    //io.emit('initialize', { orders: orders.getAll(), 
    //                        menu: getMenu() });
    
    socket.on('tableNr', function(table) {
	tables.setTableNr(table);
	console.log(tables.getTableNr());
	io.emit('currentTable', tables.getTableNr());
	io.emit('currentOrder');
    });
    // When someone orders something
    socket.on('order', function(dish) {
	orders.addOrder(dish);
	console.log("wow");
	io.emit('currentQueue', orders.getAll());
    });
    
    socket.on('orderDone', function(orderId) {
	orders.markDone(orderId);
	io.emit('currentQueue', orders.getAll());
    });
 
    socket.on('orderNext', function(orderId) {
	orders.nextState(orderId);
	io.emit('currentQueue', orders.getAll());
    });
});

http.listen(app.get('port'), function() {
  console.log('Server listening on port ' + app.get('port'));
});
