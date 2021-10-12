class AddressBook {
    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }

    get firstName() { return this._firstName; }
    set firstName(firstName) {
        let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
        if (nameRegex.test(firstName))
            this._firstName = firstName;
        else
            throw "Invalid first Name";
    }

    get lastName() { return this._lastName; }
    set lastName(lastName) {
        let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
        if (nameRegex.test(lastName))
            this._lastName = lastName;
        else
            throw "Invalid  last Name";
    
    }
    get address() { return this._address; }
    set address(address) {
        let addressRegex = RegExp("^[A-Za-z]{4,}$");
        if (addressRegex.test(address))
            this._address = address;
        else
            throw "Invalid address ";
    }


    get city() { return this._city; }
    set city(city) {
        let cityRegex = RegExp("^[A-Za-z]{4,}$");
        if (cityRegex.test(city))
            this._city = city;
        else
            throw "Invalid city ";
       
    }

    
    get state() { return this._state; }
    set state(state) { 
    let stateRegex = RegExp("^[A-Za-z0-9]{4,}$");
    if (stateRegex.test(state))
        this._state = state;
    else
        throw "Invalid state";
    
    }

    get zip() { return this._zip; }
    set zip(zip) {
        let zipRegex = RegExp("^[0-9]{3}[ ]*[0-9]{3}$");
        if (zipRegex.test(zip))
            this._zip = zip;
        else
            throw "Invalid zip ";
    }

    get phoneNumber() { return this._phoneNumber; }
    set phoneNumber(phoneNumber) {
        let phoneRegex = RegExp("^[1-9]{2}[ ]{1}[0-9]{10}$");
        if (phoneRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else
            throw "Invalid phone number";
    }

    get email() { return this._email; }
    set email(email) {
        let emailRegex = RegExp("^([a-z0-9A-Z])+([.]?[a-z0-9A-Z]+)*[@]{1}[a-z0-9A-Z]+[.]{1}[a-zA-Z]{2,}([.]{1}[a-z]{2,})?$");
        if (emailRegex.test(email))
            this._email = email;
        else
            throw "Invalid email";
    }

    toString() {
        return "\nName: " + this.firstName + " " + this.lastName +
            "\nAddress: " + this.address +
            "\nCity: " + this.city +
            "\nState: " + this.state +
            "\nZip: " + this.zip +
            "\nPhone Number: " + this.phoneNumber +
            "\nEmail: " + this.email;
    }
}

let contactArray = new Array();
contactArray.push(new AddressBook("Monali", "Jumde", "Lokseva", "Nagpur", "Maharastra",
    "440022", "91 8888888888", "monali@gmail.com"));
contactArray.push(new AddressBook("Rahul", "Kalbande", "saikheda", "Nagpur", "Maharashtra", "444 029",
    "91 7777777777", "rahul@gmail.com"));

contactArray.forEach((contact) => console.log(contact.toString()));

console.log("\nSearching a specific record by name and updating that record");
let index = contactArray.findIndex(contact => contact.firstName == "Monali");
console.log("\nIndex of Searched name : " + index);
contactArray[index].zip = "111 000";
console.log("\nContacts after being updated");
contactArray.forEach((contact) => console.log(contact.toString()));
try {
console.log("Searching specific record by name and deleting that record");
let index1 = contactArray.findIndex(contact => contact.firstName == "Monali");
contactArray.splice(index1, 2);
console.log("\nContact deleted");
contactArray.forEach((contact) => console.log(contact.toString()));

console.log("\nChecking total number of contacts in AddressBook");
var totalContacts = 0;

function FindTotalContacts(contactArray) {
    if (contactArray != null)
        totalContacts++;
    return totalContacts;
}
contactArray.reduce(FindTotalContacts, 1);
console.log("Total number of contacts are  : " + totalContacts);
console.log("\nCheck duplicates records in the AddressBook");
let countForDuplicate = 0;

function CheckForDuplicates(contact) {
    if (contact.firstName == "Rahul")
        countForDuplicate++;
    return countForDuplicate;
}
console.log("\nDuplicates records are "+countForDuplicate);
}catch (e) {
    console.log(e);
}