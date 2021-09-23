function createInstructor(firstName, lastName) {
    return{firstName,lastName}
}

let favoriteNum =42;
const instructor = {
    firstName: "Colt",
    [favoriteNum]: "that's my favorite!"
}

const instructor ={
    firstName: "Colt",
    sayHi(){
        return "hi";
    },
    sayBye(){
        return this.firstName + "says bye!";
    }
}

function createAnimal (species, verb, noise) {
    return {
        species,[verb](){
            return noise; //this way the verb is linked with the noise
        }
    }
}