class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    set clientId(newClientId) {
        if (newClientId.match(/^\d{6}$/) == undefined)
            throw new TypeError('Client ID must be a 6-digit number');
        this._clientId = newClientId;
    }

    set email(newEmail) {
        if(newEmail.match(/^[a-zA-Z]+@[a-zA-Z.]+$/) == undefined)
            throw new TypeError('Invalid e-mail');
        this._email = newEmail;
    }

    set firstName(newFirstName) {
        if(newFirstName.length < 3 ||
        newFirstName.length > 20)
            throw new TypeError('First name must be between 3 and 20 characters long');
        if(newFirstName.match(/^[A-Z]+$/i) == undefined)
            throw new TypeError('First name must contain only Latin characters');

        this._firstName = newFirstName;
    }

    set lastName(newLastName) {
        if(newLastName.length < 3 ||
            newLastName.length > 20)
            throw new TypeError('Last name must be between 3 and 20 characters long');
        if(newLastName.match(/^[A-Z]+$/i) == undefined)
            throw new TypeError('Last name must contain only Latin characters');

        this._lastName = newLastName;
    }

    get clientId() {
        return this._clientId;
    }

    get email() {
        return this._email;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }
}

try{
    //let acc = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov');
    //let acc = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov');
    //let acc = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov');
    let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov');
} catch (e) {
    console.log(e.name + ": " + e.message)
}
