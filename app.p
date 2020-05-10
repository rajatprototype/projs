
@rand -> Date.now()

fun sayhello(user) {
  << `Hello, ${user}`
}

fun getUserID(uname) {
  << `${uname.toLowerCase()}-${rand()}`
}

@alex = getUserID("Alex")

>> (alex)
