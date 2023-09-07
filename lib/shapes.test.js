const shape = require('./shapes')

describe('Shapes', () => {
    it('correctly makes a triangle', () => {
      // test logic here
        Triangle = new shape.Triangle()
        Triangle.setText('TXT')
        Triangle.setColor('blue')
        expect(Triangle.render()).toBe(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><!-- Triangle --><polygon points="50,10 10,90 90,90" fill="blue" /><!-- Text --><text x="125" y="130" fill="white" font-size="24">TXT</text></svg>`)
        
    });

    it('correctly makes a Square', () => {
        // test logic here
        Square = new shape.Square()
        Square.setText('TXT')
        Square.setColor('blue')
        expect(Square.render()).toBe(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><!-- Square --><rect x="10" y="10" width="80" height="80" fill="blue" /><!-- Text --><text x="34" y="56" fill="white" font-size="16">TXT</text></svg>`)
    });

    it('correctly makes a Circle', () => {
        // test logic here
        Circle = new shape.Circle()
        Circle.setText('TXT')
        Circle.setColor('blue')
        expect(Circle.render()).toBe(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><!-- Circle --><circle cx="50" cy="50" r="40" fill="blue" /><!-- Text --><text x="35" y="55" fill="white" font-size="16">TXT</text></svg>`)
    });

});

