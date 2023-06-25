//enahced object literals
function newUser(user, age, country) {
    return{
        user: user,
        age: age,
        country: country
    }
}

console.log(newUser('gndx',34, 'MX', 1));