var $ = require('jquery');
// var Person = require('./modules/Person');
import Person from './modules/Person';

class Adult extends Person {
    payTaxes() {
        console.log(this.name+" now owns 0$ in tax");
    }
}

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Adult("Jane Smith", "orange");
jane.greet(); 
jane.payTaxes();

// $("h1").remove();