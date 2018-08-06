// Object destructuring
const person = {
    // name: 'Godfrey',
    age:20,
    location: {
        city: 'Jos',
        temp: 30
    }
}

const {name = 'Anonymous', age} = person
console.log(`my name is ${name} i am ${age} years old`)

const {city, temp: temperature} = person.location
console.log(`It's ${temperature} degree in ${city}`);

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        // name: 'Penguin'
    }
}

const {name: publisherName = 'self-published'} = book.publisher

console.log(publisherName)



//Array destructuring
const item = ['coffee (hot)', '$2.00', '$2.50', '$2.25']

const [coffee, , price] = item

console.log(`A medium ${coffee} costs ${price}`)