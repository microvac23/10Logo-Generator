// Overall class with render method
class Shape {
    constructor(backgroundColor) {
        this.backgroundColor = backgroundColor
    }
    render () {
        console.log('placeholder');
    }
}

//Square class renders a square
class Square extends Shape {
    constructor(backgroundColor) {
        super(backgroundColor)
    }
    render () {
        return `<rect x="100" y="65" width="100" height="100" fill="${this.backgroundColor}"/>`
    }
} 

//Circle class renders a circle
class Circle extends Shape {
    constructor(backgroundColor) {
        super(backgroundColor)
    }
    render () {
        return `<circle cx="150" cy="115" r="50" fill="${this.backgroundColor}"/>`
    }
} 

//Triangle class renders a triangle
class Triangle extends Shape {
    constructor(backgroundColor) {
        super(backgroundColor)
    }
    render () {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.backgroundColor}" />`
    }
} 


module.exports = { Square, Circle, Triangle }