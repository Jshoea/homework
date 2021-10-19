console.log(numPlanets); //8
console.log (yearNeptuneDiscovered); //1846

console.log(discoveryYears); // {yearsNeptuneDiscovered: 1846, yearsMarsDiscovered: 1659}

getUserData({firstname: "Alejandro", favoriteColor: "purple"}) //your name is Alejandro and you like purple
getUserData({firstName: "Melissa"}) // Your name is Melissa and you like green
getUserData({}) // Your name is undefined and you like green

console.log(first); //Maya
console.log(second); //Marisa
console.log(third); // Chi

console.log(raindrops); //"raindrops on roses"
console.log(whiskers); "whiskers on kittens"
console.log(aFewofMyFavoriteThings) // ["bright cooper kettles", "warm wollen mittens", "brown paper packages tied up with strings"]

console.log(numbers) // [10,30,20]

const obj = {
    numbers: {
        a:1,
        b:2
    }
};

const {a,b} = obj.numbers

const arr= [1,2];
const temp = arr[0];
arr[0]= arr[1];
arr[1] = temp;

raceresults(["tom", "margaret", "Allison", "David", "pierre"])
 const raceresults = ([first, second, third, ...rest]) =>({first,second,third,rest})
