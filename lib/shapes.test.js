const {Square, Circle, Triangle} = require('./shapes.js')

//tests to see if square object is red
describe('red square', () => {
   test('test color', () => { var shape = new Square('red')
    expect(shape.render()).toEqual(`<rect x="100" y="65" width="100" height="100" fill="red"/>`)
    })
})

//tests to see if triangle object is blue
describe('blue triangle', () => {
    test('test color', () => { var shape = new Triangle('blue')
     expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue" />`)
     })
 })

//tests to see if circle object has the correct hex code
 describe('hex circle', () => {
    test('test hex', () => { var shape = new Circle('#ff0000')
     expect(shape.render()).toEqual(`<circle cx="150" cy="115" r="50" fill="#ff0000"/>`)
     })
 })