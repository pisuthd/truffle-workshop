// const getUser = require("./xxx")

// const xxx = require("./xxx")
const { getUser } = require("./externalModule")

// ES-6
// const getUser = (i = 1, user) => {

// }

// getUser(1,(user) => {
// console.log(user)
// })

console.log("1. from test.js")

// const output = xxx.getUser()

const output = getUser(1, (user) => {
    console.log(user)
})

console.log(`3. output from xxx.getUser() is --> ${output}`)

console.log(`4. ${process.argv}`)

console.log(`5. ${process.env.PASSWORD}`)

const json = {
    json: "json"
}

console.log(`6. ${JSON.stringify(json)}`)

// FILTER

const members = [
    {
        id: 1,
        enabled: true,
    },
    {
        id: 2,
        enabled: false,
    }, {
        id: 3,
        enabled: false,
    }
]

console.log(`7. ${JSON.stringify(members)}`)

console.log(`8. ${JSON.stringify(members.filter((member) => !(member.enabled)))}`)


// LOOP

let count = 0

while(true) {

    count += 1

    if (count >= 10) {
        break
    }
}

console.log(`9. count = ${count}`)

// for(let i = 0; i < 10 ; i++) {
//     console.log(`${10+i}`)
// }

// STRING

const TEXT = "HELLO WORLD"
console.log(TEXT)

const TEXT_2 = `HELLO WORLD ${1000}`
console.log(TEXT_2)