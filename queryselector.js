/*
 * I Do:
 *
 * Watch me as I:
 *   - use the querySelector  methods to retrieve elements from the DOM
 */

/*
 * You Do: Work through the following prompts. Write your code below each
 * comment.
 */

// 1. Get the element with an ID of 'first' using querySelector
let first = document.querySelector('#first');

// 2. Get the elements with a class of 'second' with querySelector
let second = document.querySelector('.second');

// 3. Try the above prompt with querySelectorAll. What's the difference between
//    what these two methods return?
let secondEls = document.querySelectorAll('.second');

// 4. Get the span element using querySelector
let span = document.querySelector('span');

// 5. Get multiple span elements using querySelectorAll
let spans = document.querySelectorAll('span');

// 6. Select only "a" tags *directly inside* of a div (no grandchildren).
let grandchildLinks = document.querySelectorAll('div > a');

// 7. Select all elements that contain a "data-target" attribute
let dataTargets = document.querySelectorAll('[data-target]');

// See here: https://css-tricks.com/almanac/selectors/a/attribute/#article-header-id-0

// 8. Select all elements where the data-target attribute equals "#false"
let dataTargetFalse = document.querySelector('[data-target="#false"]');
