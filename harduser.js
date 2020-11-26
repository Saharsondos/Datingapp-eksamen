//her hardcoder jeg nogle brugere

//jeg henter først min modelklasse
const User = require("./model/user")

let user1 = new User ("Minnie123", 23, "female", "male", "minniethemouse@hotmail.com", "Mickey321")
let user2 = new User ("Mickey The Man", 21, "male", "", "m1ckey@outlook.com", "Superstar100")
let userAarray = [user1, user2]

//jeg eksporterer mit array
module.exports = userAarray;