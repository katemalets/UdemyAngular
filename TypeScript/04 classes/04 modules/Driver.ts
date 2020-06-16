import {Customer} from "./ParameterProp";

let customer = new Customer("Masha", "Selivanova")

customer.firstName = "Olya";

console.log(customer.firstName);
console.log(customer.lastName);