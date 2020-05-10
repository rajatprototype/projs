
const rand = () => Date.now()

function sayhello(user) {
  return `Hello, ${user}`
}

function getUserID(uname) {
  return `${uname.toLowerCase()}-${rand()}`
}

const alex = getUserID("Alex")

console.log (alex)
