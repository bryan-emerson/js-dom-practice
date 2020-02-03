/*
 * I Do:
 *
 * Watch me as I:
 *   - Get data from a DOM node.
 */

/*
 * You Do: Work through the following prompts. Write your code below each
 * comment.
 */
// 1. Get all elements with a class of `.second` from the DOM and save them to
//    a variable. This will be a NodeList (which works just like an array).
let second = document.querySelector('.second');
// 2. Get the first item from the NodeList and save it to a variable.
console.log(second[0]);
// 3. Print the `dataset` property of the item from Step 2.
console.log(second[0].dataset);
// 4. Add a `data-name` attribute to the HTML page for the first heading with
//    a class of second. The value of `data-name` should be your name. What
//    happens when you print the `dataset` property now?
