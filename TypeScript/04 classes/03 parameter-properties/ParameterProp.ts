class Customer {

    constructor(private _firstName: string,
                private _lastName: string) {
    }

    public get firstName() : string {
        return this._firstName;
    }

    public set firstName(firstName) {
        this._firstName = firstName;
    }

    public get lastName() : string {
        return this._lastName;
    }

    public set lastName(lastName) {
        this._lastName = lastName;
    }
}


let customer = new Customer("Masha", "Selivanova")

customer.firstName = "Martin";

console.log(customer.firstName);
console.log(customer.lastName);
