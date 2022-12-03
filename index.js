// Assignment-number2:

// A
let length = 9;
let diagonal = Math.sqrt(length ** 2 + length ** 2);

console.log(`This is the diagonal of a square where the length of each
side is ${length}. Is equal = ${diagonal}`);

//B
const a = 5;
const b = 6;
const c = 7;
const s = (a+b+c)/2;
const area = Math.sqrt(s*((s-a)*(s-b)*(s-c)));

console.log(`Area is = ${area}`);

//C
const Circle = (function() {  
    class Circle {
        constructor(Radius) {
            this.Radius = Radius;
        }
        AreaOfCircle() {
            return 3.14 * this.Radius * this.Radius;
        }
        CircumferenceOfCircle() {
            return 2 * 3.14 * this.Radius;
        }
    }  
    return Circle;  
   })();  
   const circle = new Circle(4);  
   const areaC = circle.AreaOfCircle();  
   const circumference = circle.CircumferenceOfCircle();  
   console.log("The Area of the Circle is :" + areaC);  
   console.log("The circumference of the Circle is :" + circumference); 

//Assignment-number3:

//Part -A
const numbers = [4,6];

console.log(Math.max(...numbers));

//Part -B
const numberToCheck = prompt("Enter a number: ");

//check if the number is even
if(numberToCheck % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}

