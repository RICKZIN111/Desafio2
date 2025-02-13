/* 
    Object -> Obijetos

*/

const abacate = {
    name: "Henrique",
    age: 19,
    address: {
        street: "dos Cajueiros",
        number: 122,
        city: "Natal",
        coutry: "Brasil"
    }
}

abacate.address.number = 777 // Altera o valor de umm item
abacate.age = 20

console.log(abacate)
console.log(abacate.age)
console.log(abacate.address.coutry)