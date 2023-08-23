const inquirer = require('inquirer')
const {Square, Circle, Triangle} = require('./lib/shapes.js')
const fs = require('fs')

// This function generates the content for the SVG file and inserts the shape content depending on the response from inquirer
function generateSVG({shape, backgroundColor, textColor, text}) {
    if (shape === 'square') {
        var content = new Square(backgroundColor)
        console.log(backgroundColor);
    } else if (shape === 'circle') {
        var content = new Circle(backgroundColor)
    } else if (shape === 'triangle') {
        var content = new Triangle(backgroundColor)
    }

    const image = `<svg version="1.1" height="200" width = "300" xmlns="http://www.w3.org/2000/svg">
    ${content.render()}
    <text x="150" y="125" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>
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
        name: `backgroundColor`
    }
])
.then(response => {
    console.log(`Hello, your logo has been made and added to the examples folder!`);
    
    fs.writeFile("./examples/logo.svg", generateSVG(response), (err) => {
        if (err)
          console.log(err);
      });
})
