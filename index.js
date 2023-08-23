const inquirer = require('inquirer')
const {Square, Circle, Triangle} = require('./lib/shapes.js')
const fs = require('fs')

function generateSVG(response) {
    if (response.shape === 'square') {
        var content = new Square(response.backgroundColor)
    } else if (response.shape === 'circle') {
        var content = new Circle(response.backgroundColor)
    } else if (response.shape === 'triangle') {
        var content = new Triangle(response.backgroundColor)
    }

    const image = `<svg version="1.1" height="200" width = "300" xmlns="http://www.w3.org/2000/svg">
    ${content.render()}
    <text x="150" y="125" font-size="40" text-anchor="middle" fill="${response.textColor}">${response.text}</text>
  </svg>`

  return image
}


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
    console.log('hello', response.shape);
    
    fs.writeFile("./examples/logo.svg", generateSVG(response), (err) => {
        if (err)
          console.log(err);
      });
})
