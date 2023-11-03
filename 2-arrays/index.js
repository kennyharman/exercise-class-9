/**
 * Arrays
 * 
 * always use camel case where needed
 * 
 * Make sure to write the question/instruction and then the answers below
 * 
 */

/**
 * Question 5 - concat two different arrays by using .concat() method
 * 
 *  
 */


/**
 * Use camel case as needed
 * 
 * Initialize the variable ingredients one to an array containing the values:
 * noodles, miso, green onion
 * 
 * Initialize the variable ingredients two to an array containing the values:
 * chashu, eggs
 * 
 * Concatinate the two arrays in the order of ingredients one then ingredients two and initialize them to the variable ramen
 * 
 * Console.log ramen and write a single line comment as to what will be displayed
 */


var ingredientsOne = ["noodles", "miso", "green onion"];
var ingredientsTwo = ["chashu", "eggs"];

var ramen = ingredientsOne.concat(ingredientsTwo);
console.log(ramen); // [ 'noodles', 'miso', 'green onion', 'chashu', 'eggs' ]




/**
 * Question 6 - create a 2 dimensions array that is 2-by-4. Grab some values out of this array to create a sentence using concatenation.
 * 
 *  
 */


/**
 * Use camel case as needed
 * 
 * Initialize the variable fast food order to an array. Inside this array create 2 more arrays.
 * 
 * The first one will contain the values:
 * cheeseburger, fries, nuggets, and wrap, in that order
 * 
 * The second will contain the values:
 * pepsi, sprite, frutopia, and root beer, in that order
 * 
 * Initialize the variable sentence to the sentence "I want the _nuggets_ to eat and the _root beer_ to drink please. Gimme!!"
 * 
 */

var fastFoodOrder = [
    ["cheeseburger", "fries", "nuggets", "wrap"],
    ["pepsi", "sprite", "frutopia", "root beer"]
];

var sentence = "I want the " +fastFoodOrder[0][2]+ " to eat and the " +fastFoodOrder[1][3]+ " to drink please. Gimme!!"
console.log(sentence);