//min modelklasse for mine brugere 
class User {
    constructor(username, age, gender, preferredSex, email, password){
        this.username = username;
        this.age = age;
        this.gender = gender;
        this.preferredSex = preferredSex;
        this.email = email;
        this.password = password
    }
}

//eksporterer User
module.exports = User; //tester