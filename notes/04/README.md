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