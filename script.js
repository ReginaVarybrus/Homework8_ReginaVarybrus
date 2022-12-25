'use strict';

console.log('===Task 1===');

let triangle = {
   aSide: 0,
   bSide: 0,
   cSide: 0,
   setValues: function() { 
    this.aSide = +prompt('Enter side \'a\'');
    this.bSide = +prompt('Enter side \'b\'');
    this.cSide = +prompt('Enter side \'c\'');
    console.log(this.aSide, this.bSide, this.cSide);
   },
   getPerimeter: function() { 
    let P = this.aSide + this.bSide + this.cSide;
    return P;
   },
   isEqualSides: function() { 
    if (this.aSide === this.bSide && this.aSide === this.cSide) {
        return true;
    } else return false;
   },
}

triangle.setValues();
console.log(triangle.getPerimeter());
console.log(triangle.isEqualSides());

console.log('===Task 2===');

var country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
 };

function format(start, end) {
    console.log(start + this.name + end);
 };

format.call(country, '', ''); // Ukraine
format.apply(country, ['[', ']']); // [Ukraine]
format.call(country.capital, '', ''); // Kyiv
format.apply(country.capital, ['', '']); // Kyiv
format.apply(this); // undefined

console.log('===Task 3===');

function createCalculator(a) {
    return {
        add: function (b) {
            if (typeof b == 'string') {
                return NaN;
            }
            return a += b;
        }, 
        sub: function (b) {
            return a -= b;
        },
    };
};

const calculator = createCalculator(100);

console.log(calculator.add(10)); // 110
console.log(calculator.add(10)); // 120
console.log(calculator.sub(20)); // 100
console.log(calculator.add('qwe')); // NaN
