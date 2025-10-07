/*
* Challenges are defined, constructed and instaciated here
*/

class Challenge {
    constructor(question, answer, instruction) {
        this.question = question;
        this.answer = answer;
        this.instruction = instruction;
    }
}
//List of all challenges with question and answer
const chal1 = new Challenge(
    "console.___('Hello World!')",
     "console.log('Hello World!')", 
     "Try logging 'Hello World!' to the console (Replace the underlined part with the correct code)"
);

const chal2 = new Challenge(
    "for (let i = 0; i ____ 3; i++) { console.log(i); }",
     "for (let i = 0; i < 3; i++) { console.log(i); }",
      "Loop until the iterator reaches the value 3"
);

const chal3 = new Challenge(
    "let name = 'Sam'; console.log('Hello ' + ____);",
     "let name = 'Sam'; console.log('Hello ' + name);",
      "Print a greeting using the variable"
);

const chal4 = new Challenge(
    "let sum = 2 + 3; console.log(____);",
     "let sum = 2 + 3; console.log(sum);",
      "Log the value of the variable sum"
);

const chal5 = new Challenge(
    "let arr = [1, 2, 3]; console.log(arr[__]);",
     "let arr = [1, 2, 3]; console.log(arr[0]);",
      "Access the first element of the array"
);

const chal6 = new Challenge(
    "function greet() { return 'Hi'; }\nconsole.log(____());",
     "function greet() { return 'Hi'; }\nconsole.log(greet());",
      "Call the greet function"
);

const chal7 = new Challenge(
    "let obj = {a: 10}; console.log(obj.__);",
     "let obj = {a: 10}; console.log(obj.a);",
      "Access the property of the object"
);

const chal8 = new Challenge(
    "let num = 5; if (num ____ 10) { console.log('Small'); }",
     "let num = 5; if (num < 10) { console.log('Small'); }",
      "Check if num is less than 10"
);

const chal9 = new Challenge(
    "for (let i = 1; i <= 3; i++) { console.log(i * __); }",
     "for (let i = 1; i <= 3; i++) { console.log(i * 2); }",
      "Multiply each number by 2 in the loop"
);

const chal10 = new Challenge(
    "let fruits = ['apple','banana']; fruits.push('____');",
     "let fruits = ['apple','banana']; fruits.push('orange');",
      "Add 'orange' to the array"
);

const chal11 = new Challenge(
    "let text = 'JavaScript'; console.log(text.____(0,4));",
     "let text = 'JavaScript'; console.log(text.slice(0,4));",
      "Extract the first 4 characters"
);

const chal12 = new Challenge(
    "let arr = [10, 20, 30];\narr.forEach(x => console.log(___));",
     "let arr = [10, 20, 30];\narr.forEach(x => console.log(x));",
      "Print each element using forEach"
);

const chal13 = new Challenge(
    "let arr = [1,2,3]; let doubled = arr.map(x => x * __);",
     "let arr = [1,2,3]; let doubled = arr.map(x => x * 2);",
      "Multiply each element by 2"
);

const chal14 = new Challenge(
    "let scores = [50, 70, 90];\nlet high = scores.____(s => s > 60);",
     "let scores = [50, 70, 90];\nlet high = scores.filter(s => s > 60);",
      "Keep only numbers greater than 60"
);

const chal15 = new Challenge(
    "let numbers = [1,2,3];\nlet total = numbers.reduce((a,b) => a + b, __);",
     "let numbers = [1,2,3];\nlet total = numbers.reduce((a,b) => a + b, 0);",
      "Use reduce to sum starting from 0"
);

const chal16 = new Challenge(
    "let str = 'hello'; console.log(str.toUpperCase(___));",
     "let str = 'hello'; console.log(str.toUpperCase());",
      "Convert the string to uppercase"
);

const chal17 = new Challenge(
    "let colors = ['red','blue','green'];\nconsole.log(colors.length ____ 3);",
     "let colors = ['red','blue','green'];\nconsole.log(colors.length === 3);",
      "Check if the array has 3 items"
);

const chal18 = new Challenge(
    "let person = {name:'Sam'};\nconsole.log(`Hello, ${person.___}`);",
     "let person = {name:'Sam'};\nconsole.log(`Hello, ${person.name}`);",
      "Use template literals to access the property"
);

const chal19 = new Challenge(
    "let x; console.log(typeof ___);",
     "let x; console.log(typeof x);",
     "Check the type of an undefined variable"
);

const chal20 = new Challenge(
    "let age = 20;\nlet canVote = (age >= 18) ? 'Yes' : '___';",
     "let age = 20;\nlet canVote = (age >= 18) ? 'Yes' : 'No';",
      "Use the ternary operator for conditional output"
);

const chal21 = new Challenge(
    "let p = new Promise(resolve => resolve('Done'));\np.then(msg => console.log(___));",
     "let p = new Promise(resolve => resolve('Done'));\np.then(msg => console.log(msg));",
      "Log the resolved message from the Promise"
);

const chal22 = new Challenge(
    "try { throw 'Error'; } catch(e) { console.log(___); }",
     "try { throw 'Error'; } catch(e) { console.log(e); }",
      "Log the error inside catch"
);

const chal23 = new Challenge(
    "class Animal { constructor(name){ this.name = name; } }\nlet dog = new Animal('Rex'); console.log(dog.___);",
     "class Animal { constructor(name){ this.name = name; } }\nlet dog = new Animal('Rex'); console.log(dog.name);",
      "Access the name property of the object created from the class"
);

const chal24 = new Challenge(
    "let date = new Date();\nconsole.log(date.getFullYear(___));",
     "let date = new Date();\nconsole.log(date.getFullYear());",
      "Get the current year from the Date object"
);

const chal25 = new Challenge(
    "let nums = [3, 1, 4]; console.log(Math.max(___));",
     "let nums = [3, 1, 4]; console.log(Math.max(...nums));",
      "Find the largest number in the array using Math.max and spread"
);