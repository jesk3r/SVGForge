const inquirer = require('inquirer');
const fs = require('fs')
const Shapes = require('./lib/shapes.js')

const questions = [
    { 
        type: "input", 
        message: "Enter 3 characters", 
        name: "textCharacter" 
    },
    {
        type: 'list',
        message: 'Shape: ',
        name: 'shape',
        choices: ['circle', 'triangle', 'square']
    },
    { 
        type: "input", 
        message: "Enter a color or a hexvalue followed by a '#' symbol: ", 
        name: "color" 
    },
];


function main(){
    inquirer.prompt(questions
    ).then(parseResponse)
}

function parseResponse(response){

}

main()