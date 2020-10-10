# 04-JS-Functions

In this course we'll continue to build your JavaScript skills by learning another fundamental building block in JavaScript: **[functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)**. Functions are at the heart of how JavaScript (or any programming language) works. At its simplest, a function is a set of instructions that you want to run over and over again.

functions let you group a series of statements or instructions to perform a specific task by a program.

**Declare a function** with

**[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)** gotoCoffeeShop() {

// block of code

}

the program activates the function by calling the function

```jsx
gotoCoffeeShop()
```

the parenthesis are important - they call the function and activate its programming.

functions let you consolidate and efficiently have a short command to call your function and execute it again and again.

**Create and Call a function**

Now that you've learned the basics of functions, it's time to create and call a function.

```jsx
function getRandomNumber() {
	const range = input("Enter a number)
	return Math.floor( Math.random() * range) + 1
}

const answer = getRandomNumber()
console.log(answer)
```

Using the Math Object random() method - we wrap it into our own function.

**Return a Value from a Function**

Functions can also give something back when they finish. This is called "returning a value," and it's common when working with functions. To return a value from a function, use the [return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return) keyword, which creates what's called a "return statement."

**Using Multiple return Statements**

A function can have more than one return statement, but only ever run one based on a condition.

The following JS code snippet is embedded in an HTML file with the following line:

<input type="text" id="info" value="My info">

```jsx
function isFieldEmpty() {
	const field = document.querySelector('#info')
	if (field.value === '') {
		return true
	} else {
		return false
	}
}
```

Although there are two return statements in this function - the function will only return once - either true or false - never both.

Anything following a return statement in a function is not executed - a return statement that is executed immediately exits that function yielding control back to the function invoker.

The return statement also can only return a single value.

```jsx
function good() {
	return "hello"
}

function bad() {
	~~return 1, "hello"~~
}
```

![04-JS-Functions%2072086599f83d4a4aa7a6a47aa1e8c9d8/Screenshot_from_2020-10-09_07-47-43.png](04-JS-Functions%2072086599f83d4a4aa7a6a47aa1e8c9d8/Screenshot_from_2020-10-09_07-47-43.png)

**Function Parameters and Arguments**

Functions often need specific information to perform a task. In addition to getting information from a function, you can send information to a function to change how that function works.

functions can accept information called **[arguments](https://developer.mozilla.org/en-US/docs/Glossary/argument)**.

to have a function accept an argument you add a **[parameter](https://developer.mozilla.org/en-US/docs/Glossary/Parameter)** inside the parenthesis

You pass an argument to a function which is stored in a parameter in the function. 

a parameter is a formal argument - u*nlike an argument in usual mathematical usage, the argument in computer science is the actual input expression passed/supplied to a function, procedure, or routine in the invocation/call statement, whereas the parameter is the variable inside the implementation of the subroutine.*

```jsx
function getRandomNumber(upper) { // upper is the parameter
	return Math.floor( Math.random() * upper) + 1
}

console.log( getRandomNumber(6) ) // 6 is the argument
```

**Pass Multiple Arguments to a Function**

Functions can accept more than one argument. When calling a function, you're able to pass multiple arguments to the function; each argument gets stored in a separate parameter and used as a discrete variable within the function.

```jsx
function getArea(length, width, unit) { // length, width & unit are the parameters
	return `${length * width} ${unit}` 
}

console.log( getArea(10, 20, 'sqft') ) // 10, 20, & 'sqft' are the arguments
```

**Variable Scope**

JavaScript provides separate "[scopes](https://developer.mozilla.org/en-US/docs/Glossary/Scope)" for each function. Any variables created within a function are not accessible outside the function, and cannot interact with variables created in another function.

```jsx
// Global Scope
let person = 'Lee'

function greeting() {
	let person = 'Meg'
	console.log(`Hi ${person}!`)
}

function greeting2() {
	let person = 'Robert'
	console.log(`Good Morning ${person}.`)
}

greeting() // => Hi Meg! 
console.log( `Hi ${person}!`) // => Hi Lee
greeting2() // => Good Morning Robert.
```

[Scope](https://en.wikipedia.org/wiki/Scope_(computer_science)) is a way for JS to protect variables from overwriting each other - it is the **context** in which a variable can be accessed, such as within a function, or within the global scope of the entire program. 

**Function Declarations vs. Function Expressions**

There is another syntax for creating a function that is called a "function expression."

```jsx
const getRandomNumber = function(upper) {
	return Math.floor( Math.random() * upper) + 1
}
```

![04-JS-Functions%2072086599f83d4a4aa7a6a47aa1e8c9d8/Screenshot_from_2020-10-10_15-22-27.png](04-JS-Functions%2072086599f83d4a4aa7a6a47aa1e8c9d8/Screenshot_from_2020-10-10_15-22-27.png)

A function expression lets you assign a function to a variable.

Calling a function before it is declared is called [hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting).

**function expressions are not hoisted.**

![04-JS-Functions%2072086599f83d4a4aa7a6a47aa1e8c9d8/Screenshot_from_2020-10-10_15-30-14.png](04-JS-Functions%2072086599f83d4a4aa7a6a47aa1e8c9d8/Screenshot_from_2020-10-10_15-30-14.png)

**Create Functions Using Arrow Syntax**

[Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) provide a special, more concise syntax for creating functions. Arrow functions are similar to function expressions; they're appropriately called "[arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)."

```jsx
const square = (x) => {
	return x * x
}
```

Like function expressions - arrow functions are not hoisted.

# **Concise Arrow Function Syntax**

Arrow functions are already less verbose than function declarations and function expressions, but you can write them in a more concise way.

## **Arrow Functions with One Parameter**

If your arrow function accepts a single argument, like the **`square`** function below, you can omit the parentheses:

```jsx
const square = x => { return x * x;
}
square(10); *// 100*
```

## **Arrow Functions with Multiple Parameters**

JavaScript does not allow you to remove the parentheses from arrow functions with no or multiple parameters; only functions with a single parameter.

The following arrow function expression (without parentheses) throws a syntax error:

```jsx
const getArea = width, length, unit => { 
	const area = width * length; return `${area} ${unit}`;
}
getArea(10, 20, 'sq ft');
*// Uncaught SyntaxError: Missing initializer in const declaration*
```

You need to include the parentheses when working with multiple (or no) parameters:

```jsx
const getArea = (width, length, unit) => { 
	const area = width * length; return `${area} ${unit}`;
}
getArea(10, 20, 'sq ft'); *// 200 sq ft*
```

## **Arrow Functions as One-line Statements**

If your function body (the part between the curly braces) is only one line of code, you can make the function more concise by omitting the **`return`** keyword and placing everything on one line:

```jsx
const square = x => { x * x };
```

When you omit the **`return`** keyword in a single-line function, the value is returned automatically (or implicitly). This is called an **implicit return**.

In fact, when using an implicit return, you don't even need the curly braces (they are optional). You can reduce the arrow syntax further by writing the function like this:

```jsx
const square = x => x * x;
const multiply = (x, y) => x * y;
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
```

## **Single-line Functions with No Parameters**

Finally, a single-line arrow function with no parameters requires parentheses before the arrow (**`=>`**) token, otherwise JavaScript produces a syntax error. For example:

```jsx
const name = 'Jesse';
const greeting = => alert(`Greetings, ${name}!`);
greeting(); *// Uncaught SyntaxError: Unexpected token '=>'*
```

The following is the correct way:

```jsx
const name = 'Jesse';
const greeting = () => alert(`Greetings, ${name}!`);
```

This shorter syntax might seem strange at first, and take a little getting used to, but compared to the following expression:

```jsx
const greeting = function() { 
	alert(`Greetings, ${name}!`);
};
```

it can make parts of your code more concise and easier to read. However, even if your function meets the criteria for concise syntax, it's still perfectly acceptable to use the standard arrow function syntax.

**Default Function Parameters**

JavaScript lets you assign [default values to your function parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters). That way, if, for any reason, you do not pass a specific argument to a function, the function uses (or falls back to) the default value.

```jsx
function sayGreeting(greeting= 'Good morning', name = 'student') {
	return `${greeting} ${name}`
}
sayGreeting() // Good morning student
sayGreeting('hi') // hi student
sayGreeting(undefined, 'Bob') // Good morning Bob
sayGreeting('Good afternoon', 'Bob') // => Good afternoon Bob
```

**Note**: [Passing undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters#Passing_undefined_vs._other_falsy_values) - if the first argument is set explicitly to undefined (though not null or other falsy values), the value of the second argument can be passed. Passing undefined acts as a placeholder for the argument you want to skip.

# **Descriptive Comments for Functions**

Developers often use descriptive comments in their programs for function documentation. The comments provide a high-level overview of what a function does, its parameters, and return value.

There is a standard syntax you can use to document functions -- it's known as **[JSDoc](https://jsdoc.app/index.html)**, and the format looks like this:

```jsx
/**
 * [A short description of the myFunc function]
 *
 * @param {[param type]} param1 - [parameter description]
 * @param {[param type]} param2 - [parameter description]
 * @returns {[return type]} [documents the function's return value]
 */

function myFunc( param1, param2 ) {
  // function returns a value...
}
```

## **Review the Format**

When using the JSDoc approach, place a comment immediately before the function you are documenting. Each comment begins with **`/**`**. Let's go over each line in the comment sequence:

- The first part of the comment is a **[short and simple description](https://jsdoc.app/about-getting-started.html)** of what the function does. Below the description, you add more information with **`@`** tags.
- The **`[@param](https://jsdoc.app/tags-param.html)`** tag provides the name, type, and description of a function parameter. Use one **`@param`** tag for each parameter you define.
- The **`[@returns](https://jsdoc.app/tags-returns.html)`** tag (also **`@return`**) documents the value the function returns with a type and description.

Besides **`@param`** and **`@returns`**, there are other useful tags like **`[@throws](https://jsdoc.app/tags-throws.html)`**, **`[@example](https://jsdoc.app/tags-example.html)`**, **`[@author](https://jsdoc.app/tags-author.html)`**, and **[many more](https://jsdoc.app/index.html#block-tags)**.

## **Document a Function**

Below is an example of how you might document the **`getArea`** function using the JSDoc format:

```jsx
/**
 * Calculates and returns the area of a rectangle.
 *
 * @param {number} width - The width of the rectangle.
 * @param {number} length - The length of the rectangle.
 * @param {string} unit - The unit of measurement.
 * @returns {string} The area of the rectangle and unit of measure.
 */

function getArea(width, length, unit) {
  const area = width * length;
  return `${area} ${unit}`;
}
```

## **The Power of JSDoc**

Besides its descriptive format, the JSDoc tool itself has other useful and powerful features. JSDoc is also a documentation generator for JavaScript.

For example, when you add documentation comments directly to your source code, JSDoc can scan your code and **[generate an HTML documentation website](https://jsdoc.app/about-getting-started.html#generating-a-website)** for you. However, you'll need to install special tools to run this feature -- you'll learn about some of these tools later in your JavaScript learning journey.

JSDoc also has built-in support in text editors like **[Visual Studio Code](https://code.visualstudio.com/)**. VS Code can use the **[JSDoc annotations](https://code.visualstudio.com/docs/languages/javascript#_jsdoc-support)** to provide code completion, hover information, and function signature information to help you write code more quickly and correctly.

## **Take Advantage of JSDoc Comments**

Keep in mind that you don't have to install any extra tools to simply use the JSDoc syntax and format in your code.

Using a consistent and descriptive commenting approach makes your functions more predictable. Other developers who need to learn about your functions will have a faster and easier way to identify each part of a function.

See [JSDoc cheat sheet](https://devhints.io/jsdoc)

**Function Challenge**

In this practice challenge, you will make the random number function you created earlier more flexible.

```jsx
/**
 * Returns a random number between two numbers.
 * 
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */
const getRandomNumber = (lower, upper=100) => Math.floor(Math.random() * (upper - lower + 1)) + lower

const getRandomNumber2 = (lower, upper=100) => {
	if (isNaN(lower) || isNan(upper)) throw Error ('lower and upper need to be numbers') 
	return Math.floor(Math.random() * (upper - lower + 1)) + lower
}

console.log(`${getRandomNumber(10)} is a random number between 10 and 100`)
console.log(getRandomNumber2('hello', 2)) // => 'lower and upper need to be numbers'
```

### **Functions as First-class Citizens**

Functions are often referred to as "first-class citizens" in JavaScript, which means that you have the ability to do almost anything with functions.

You can store a function in a variable:

```jsx
const multiply = function(a, b) {
  return a * b;
};
```

Pass a function as an argument to other functions:

```jsx
function sayYay() {
  return 'Yay';
}

/*
  - The argument passed for 'func' should be a reference to a function
  - That function gets called in console.log
*/
function greeting(func, name) {
  console.log( `${func()}, ${name}!` );
}

/* 
  - A reference to the sayYay function gets passed to the greeting function as an argument
  - sayYay returns the string 'Yay', so the greeting function logs 'Yay, Lee!'
*/
greeting(sayYay, 'Lee'); // Yay, Lee!
```

You can even set a function to return another function:

```jsx
function sayYay() {
  return function() {
    console.log('Yay!');
  }
}
```

This lets you take advantage of powerful design patterns you'll learn about in later courses.

![04-JS-Functions%2072086599f83d4a4aa7a6a47aa1e8c9d8/Screenshot_from_2020-10-10_17-56-37.png](04-JS-Functions%2072086599f83d4a4aa7a6a47aa1e8c9d8/Screenshot_from_2020-10-10_17-56-37.png)