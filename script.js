function Car (year, owner, manufacturer) {
  this.year = year;
  this.owner = owner;  
	this.manufacturer = manufacturer;
	this.speak = function () {
    /* 'this' keyword refers to the object it belongs to */
      
    /* In a function, this refers to the global object.
  
    In a function, in strict mode, this is undefined.

    In a method, this refers to the owner object. 
  
    Methods like call(), and apply() can refer this to any object. Alone, this refers to the global object

    In an event, this refers to the element that received the event.*/
		return `vrooooooom!`;
    
	}
};

