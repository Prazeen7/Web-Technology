const person = new Object();
person.firstName = "Jack";
person.lastName = " Doe";
person.age = 14;

document.getElementById('demo').innerHTML = person.firstName + person.lastName + person.age

function emp(id, name, salary){
    this.id = id
    this.name = name
    this.salary = salary
}

e= new employee(90, "Jack", 30000)
