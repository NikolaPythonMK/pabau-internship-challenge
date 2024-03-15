import {PathFinder} from "./script.js";

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

let input1: string[][] = [
    ['>', '-', '-', '-', 'A', '-', '-', '-', '+'],
    ['', '', '', '', '', '', '', '', '|'],
    ['s', '-', 'B', '-', '+', '', '', '', 'C'],
    ['', '', '', '', '|', '', '', '', '|'],
    ['', '', '', '', '+', '-', '-', '-', '+']
];

let input2: string[][] = [
    ['>', '-', '-', '-', 'A', '-', '@', '-', '+'],
    ['', '', '', '', '', '', '', '', '|'],
    ['+', '-', 'U', '-', '+', '', '', '', 'C'],
    ['|', '', '', '', '|', '', '', '', '|'],
    ['s', '', '', '', 'C', '-', '-', '-', '+']
];

let test = new PathFinder(input1);
const {path, letters} = test.find();

console.log('path:', path);
console.log('letters:', letters);