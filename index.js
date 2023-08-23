const inquirer = require('inquirer')
const {Square, Circle, Triangle} = require('./lib/shapes.js')

inquirer.prompt([
    {
        type: 'input',
        message: `What is the text for your logo?(3 characters max)`,
        name: `text`
    },
    {
        type: 'input',
        message: `What text color do you want? (Input color name or hex code "#000000")`,
        name: `textColor`
    },
    {
        type: 'list',
        message: `What shape would you like for your logo?`,
        choices: ['triangle', 'circle', 'square'], 
        name: `shape`
    },
    {
        type: 'input',
        message: `What background color would you like? (Input color name or hex code "#000000")`,
        name: `background`
    }
])
.then(response => {
    console.log('hello', response);})