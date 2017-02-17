'use strict';

new Vue ({
    el: '#mainID',
    mixins: [sharedVueData],
    methods: {
	sendToBar: function(table) {
	    socket.emit('tableNr', table);
	    //	    window.location.pathname = "bar";
	}
    }
})
