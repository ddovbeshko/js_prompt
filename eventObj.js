(function() {
	var eventObj = {
		addEvent: function (el, type, fn) {
			if (typeof addEventListener !== "undefinded") {
				el.addEventListener(type, fn, false); 
			} else if (typeof attachEvent !== "undefinded") {
				el.attachEvent('on' + type, fn); 
			} else {
				el['on' + type] = fn;
			}
		},
		
		getTarget: function(event) {
			if(typeof event.target !== "undefinded") {
				return event.target;
			} else {
				return event.srcElement;
			} 
		},
		
		preventDefault: function(event) {
			if(typeof event.preventDefault !== "undefinded") {
				event.preventDefault();
			} else {
				return event.returnValue = false;
			} 
		}
		
	};
})();