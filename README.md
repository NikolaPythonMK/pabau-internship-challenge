# Guide on how to start the project

## Prerequisites

Before getting started, ensure that you have the following installed on your system:

- [Node.js](https://nodejs.org) (v12 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [TypeScript](https://www.typescriptlang.org/) (install globally with `npm install -g typescript`)

## Getting Started

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/NikolaPythonMK/pabau-internship-challenge
    ```

2. Navigate to the project directory:

    ```bash
    cd pabau-internship-challenge
    ```

## Building the Project

To compile the TypeScript code and generate the distribution files, follow these steps:

1. Run the TypeScript compiler (`tsc`) in the terminal:

    ```bash
    tsc
    ```

   This command compiles the TypeScript files in the `src` directory and outputs the JavaScript files to the `dist` directory.

## Running the Project

After compiling the TypeScript files, you can run the project using Node.js. Navigate to the project directory if you're not already there, and then run either of the following commands:

1. Using Node.js directly:

    ```bash
    node ./dist/index.js
    ```

2. Using npm:

    ```bash
    npm start
    ```

This will execute the compiled JavaScript code in the `dist/index.js` file.

## Source Code

The source code for this project is located in the `src` directory. Feel free to explore and modify it to suit your needs.
