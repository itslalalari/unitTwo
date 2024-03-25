/*Event listener: clicking toggles text in and out of view and 
utilize an anon fuction when event is triggered 
-click event causes text to fade in and out of view*/
$(document).ready(function(){ 
    $("#p2").click(()=>{
            $("#p1").fadeToggle();
        });
});

/*create a class with a constructor that takes 1 or more param 
and use them to affect one or more properties of the object created
*/

class person {
    constructor(firstName, title) {
        this.firstName = firstName;
        this.title = title;
};
};

const chef = new person('Bob');
const handyman = new person ('Teddy');
const mortician = new person('Mort');
const rival = new person('Jimmy');

chef.title='Chef';

 person.name = personName {
 return (firstName + " the " + title)
  };
document.getElementById("p3").innerHTML = personName;


 
/* Classes
		Create at least one class with the following specifications:

		_/3 : A constructor that takes 1 or more parameters and uses them to affect 1 or more 
        properties of the object created

		_/3 : At least one method for the object created

	Objects
		_/3 : Create at least one object and call a method of that object*/