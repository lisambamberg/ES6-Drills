//Template Literals and Default Parameters Value
//2. function favMovie(movie) {
//     console.log(`my favorite movie is ${movie}`);
// }
// favMovie();

// //5.
// function favMovie(movie = "the room") {
//     console.log(`my favorite movie is ${movie}`);
// }
// favMovie("Butch Cassidy and the sundance kid");

// //8.
// function favMovie(name = "Tommy Wiseau", movie = "the room") {
//     console.log(`my name is ${name} and my favorite movie is ${movie}`);
// }
// favMovie("Lisa", "Butch Cassidy and the sundance kid");


//Arrow Functions
// //1.let favMovie = (name = "Tommy Wiseau", movie = "the room") => {
//     console.log(`my name is ${name} and my favorite movie is ${movie}`);
// }
// favMovie();

// //4.
// let favMovie = (name = "Tommy Wiseau", movie = "the room") => console.log(`my name is ${name} and my favorite movie is ${movie}`);
// favMovie();

//5.
getFirstName = str => {
    words = str.split(' ');
    console.log(words[0])
}
getFirstName("Lisa Bamberg");

// //6.
getFirstNameConcise = (fullName) => {console.log(fullName.split(' ')[0])};
getFirstNameConcise("Lisa Mae Bamberg");

//10.
let doMath = (x, y) => console.log(`exponent result: ${x ** y} product result: ${x * y}`)
doMath(1, 2);


// //Spread Syntax
// //1.
let arr = ["Lisa", "Birmingham", "ice cream"];

let myFunc = (name, location, favFood) => {
    console.log(`name: ${name} location: ${location} favFoods: ${favFood}`)
}

myFunc(...arr);

//4.
let myName = "Lisa";

let myFunc2 = (str) => {
    let spreaded = [...str]
    console.log(spreaded);

    //7.
    for (let i = 0; i < spreaded.length; i++) {
        console.log(spreaded[i])
    };
}
myFunc2(myName)
