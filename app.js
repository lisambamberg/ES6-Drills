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

//8.
function favMovie(name = "Tommy Wiseau", movie = "the room") {
    console.log(`my name is ${name} and my favorite movie is ${movie}`);
}
favMovie("Lisa", "Butch Cassidy and the sundance kid");

