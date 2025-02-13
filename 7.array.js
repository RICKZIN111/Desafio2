/* 
    Array -> Vetor / Matriz

*/
const user = [20, 30, 40]

user[1] = 345

console.log(user)


const myArray = [
    {
        name: "Henrique",
        age: 19,
        address: {
            street: "dos Cajueiros",
            number: 122,
            city: "Natal",
            coutry: "Brasil"
        }
    },
    {
        name: "Allaphy",
        age: 16,
        address: {
            street: "cidade nova",
            number: 122,
            city: "Natal",
            coutry: "Brasil"
        }
    }
]

myArray[1].age = 33
myArray[0].address.city = "São Paulo"

console.log(myArray[1].address.street)
