// Overall class with render method
class Shape {
    constructor(textColor, backgroundColor) {
        this.textColor = textColor;
        this.backgroundColor = backgroundColor
    }
    render () {

    }
}

//Square class renders a square
class Square extends Shape {
    constructor(color) {
        super(color)
    }
    render () {
        `<rect x="100" y="65" width="100" height="100" fill="${this.color}"/>`
    }
} 

//Circle class renders a circle
class Circle extends Shape {
    constructor(color) {
        super(color)
    }
    render () {
        `<circle cx="150" cy="115" r="50" fill="${this.color}"/>`
    }
} 

//Triangle class renders a triangle
class Triangle extends Shape {
    constructor(color) {
        super(color)
    }
    render () {
        `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
} 


module.exports = { Square, Circle, Triangle }