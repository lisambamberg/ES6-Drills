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
getFirstNameConcise = str => {
    words = str.split(' ');
    console.log(words[0])
}
getFirstNameConcise();

//10.
let doMath = (x, y) => console.log(`exponent result: ${x ^ y} product result: ${x + y}`)
doMath(1, 2);

