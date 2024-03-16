import {PathFinder} from "./path-finder.js";

// Test case
// >---A-@-+
//         |
// +-U-+   C
// |   |   |
// s   C---+

// example
// >---A---+
//         |
// s-B-+   C
//     |   |
//     +---+

let example: string[][] = [
    ['>', '-', '-', '-', 'A', '-', '-', '-', '+'],
    ['', '', '', '', '', '', '', '', '|'],
    ['s', '-', 'B', '-', '+', '', '', '', 'C'],
    ['', '', '', '', '|', '', '', '', '|'],
    ['', '', '', '', '+', '-', '-', '-', '+']
];

let assignment: string[][] = [
    ['>', '-', '-', '-', 'A', '-', '@', '-', '+'],
    ['', '', '', '', '', '', '', '', '|'],
    ['+', '-', 'U', '-', '+', '', '', '', 'C'],
    ['|', '', '', '', '|', '', '', '', '|'],
    ['s', '', '', '', 'C', '-', '-', '-', '+']
];

let test = new PathFinder(assignment);
const {path, letters} = test.find();

console.log('path:', path);
console.log('letters:', letters);