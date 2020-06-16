class Customer {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// let customer = new Customer();
// customer.firstName = "Katya";
// customer.lastName = "Malets";

let customer = new Customer("Helen", "Markovna")

console.log(customer.firstName);
console.log(customer.lastName);