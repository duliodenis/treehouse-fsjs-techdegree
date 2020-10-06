# Unit 2 - JS Basics

**Sat - 10/3/20**

Started as a scripting language for the browser

Now - super powerful and its everywhere like server-side with nodeJS.

This course

**[Syntax](https://developer.mozilla.org/en-US/docs/Glossary/Syntax)** - a programming language's commands, special words and punctuation.

practices like debugging - a set of rules of how we should structure the program = Vocabulary + [Grammar](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types)

The JS Console = **CTRL-Shift-J**

**Javascript Statement** = alert('hello, world!')

[document.write](https://developer.mozilla.org/en-US/docs/Web/API/Document/write)("Welcome to my webpage")

**first JS program**

alert('Hello. Thanks for visiting.')

console.log('Hellow from the console.)

document.write("<h1>Welcome to my web page.</h1>")

![02-JS-Basics%20063b61fd805b4ffead33820dc7fede05/Screenshot_from_2020-10-03_16-24-13.png](02-JS-Basics%20063b61fd805b4ffead33820dc7fede05/Screenshot_from_2020-10-03_16-24-13.png)

Every browser has a **JavaScript Engine** - a program, or interpreter, built into the browser that executes JavaScript code.

Executing the program - running the statements one by one

To link an html file to a javascript file you use the script tag in the head of the htmml file

**<script src="js/script.js"></script>**

you can also put javascript directly inside the html file with the script tag

**<script>**

alert('hello, world')

**</script>**

***NOTE**: one things you can't do is have both s src and code between the script tags. once you have a src file everything between the script tags is ignored.*

Typically - if there is a script file in an html you'll see it at the bottom of the html - right before the end body tag - so that it is executed after the page is rendered.

**Debug JS in the Console -** see instructor use console to fix his syntax errors

**JavaScript Practice Challenge**

Practice using JavaScript by writing a "self-destructing message" program.

```jsx
// 1. Display an alert dialog with the content: "Warning! This message will self-desctuct in"
alert("Warning! This message will self-desctuct in")

// 2. Display a "3..2..1.." countdown using 3 alert dialog boxes
alert("3...")
alert("2...")
alert("1...")

// 3. This statement selects the <h1> element and replaces its text with "BOOM!"
document.querySelector("h1").textContent = "BOOM!"

// 4. Log "Message destroyed!" to the console
console.log("Message destroyed!")
```

![02-JS-Basics%20063b61fd805b4ffead33820dc7fede05/Screenshot_from_2020-10-03_17-13-32.png](02-JS-Basics%20063b61fd805b4ffead33820dc7fede05/Screenshot_from_2020-10-03_17-13-32.png)

**Variables**

A program needs to work with information that changes or varies - these are variables.

A variable is like a box with a label

**var score; // declaring a variable**

var score = 0; // **assigning a value to a variable**

the word "score" versus the variable score

score is a reference to the value.

declare a variable once

reassign their values

score = 10;

![02-JS-Basics%20063b61fd805b4ffead33820dc7fede05/Screenshot_from_2020-10-03_20-10-28.png](02-JS-Basics%20063b61fd805b4ffead33820dc7fede05/Screenshot_from_2020-10-03_20-10-28.png)

![02-JS-Basics%20063b61fd805b4ffead33820dc7fede05/Screenshot_from_2020-10-03_20-11-06.png](02-JS-Basics%20063b61fd805b4ffead33820dc7fede05/Screenshot_from_2020-10-03_20-11-06.png)

![02-JS-Basics%20063b61fd805b4ffead33820dc7fede05/Screenshot_from_2020-10-03_20-11-48.png](02-JS-Basics%20063b61fd805b4ffead33820dc7fede05/Screenshot_from_2020-10-03_20-11-48.png)

Resource: [Variable Naming Rules](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables#An_aside_on_variable_naming_rules)

**Change the value of a variable** [without reassignment]

score = score + 10

score += 10 // **[addition assignment operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Addition_assignment_2)**

Modern JS: **[let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) & [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)**

const wontChange = 10

wontChange = 15 // **no bueno**

let score = 5

score += 10 // totally acceptable

![02-JS-Basics%20063b61fd805b4ffead33820dc7fede05/Screenshot_from_2020-10-03_20-23-28.png](02-JS-Basics%20063b61fd805b4ffead33820dc7fede05/Screenshot_from_2020-10-03_20-23-28.png)

![02-JS-Basics%20063b61fd805b4ffead33820dc7fede05/Screenshot_from_2020-10-03_20-23-39.png](02-JS-Basics%20063b61fd805b4ffead33820dc7fede05/Screenshot_from_2020-10-03_20-23-39.png)

![02-JS-Basics%20063b61fd805b4ffead33820dc7fede05/Screenshot_from_2020-10-03_20-23-48.png](02-JS-Basics%20063b61fd805b4ffead33820dc7fede05/Screenshot_from_2020-10-03_20-23-48.png)

![02-JS-Basics%20063b61fd805b4ffead33820dc7fede05/Screenshot_from_2020-10-03_20-29-28.png](02-JS-Basics%20063b61fd805b4ffead33820dc7fede05/Screenshot_from_2020-10-03_20-29-28.png)

**Practice Basic Variables**

// 1. Attach this file -- practice.js -- to the index.html file using a ```<script>``` tag

// 2. In this JavaScript file, add a prompt dialog to capture input from the user and store it in a variable

// 3. Add a second a prompt dialog to capture input from the user and store it in a second variable

// 4. Create a third variable and which combines an uppercase version values in the two other variables separated by a space. For example, if the first two variables contain "sally" and "forth", this third variable should contain the string value "SALLY FORTH"

// 5. Create a fourth variable to store a number. The number should be the total number of characters in the third variable.

// 6. Add an alert dialog box that says "The string '[insert value of third variable here]' is X number of characters long." For example, if the third variable contained the string "SALLY FORTH" then the alert dialog should says "The string 'SALLY FORTH' is 11 characters long."

Data Types = values come in different types and the programming language treat each differently.

Numbers = used for numeric calculations

**Strings** = used for words, sentences

JS treats Strings as an Object

**properties**: length ⇒ "hello".length

**methods**: an action ⇒ "hello".toUpperCase()

**Capture Input**

[prompt](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)('What is your name?')

**Combine Strings**

String Concatenation - the process of combining two or more strings to create a bigger string.

**Sun - 10/4**

**[Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)**

Modern JS: template literals makes code more readable.

`This is a modern JS string.`

const name = `Hello ${name}`

${} = string interpolation

Also support multi-line strings.

**Display the Value of a String on a Page**
You learned how to collect information from users with the prompt() method, and you displayed that information in an alert dialog, as well as in the console. In this lecture, you'll learn a common way to display information on a webpage using JavaScript.

*shout.js*

```jsx
const stringToShout = prompt('What do you want to shout!')
const shout = stringToShout.yoUpperCase()
const shoutMessage = `<h2>The message to shout is: ${shout}!</h2>`
[document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)('[main](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main)').**[innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)** = shoutMessage
```

![02-JS-Basics%20063b61fd805b4ffead33820dc7fede05/Screenshot_from_2020-10-04_15-31-16.png](02-JS-Basics%20063b61fd805b4ffead33820dc7fede05/Screenshot_from_2020-10-04_15-31-16.png)

**Variables and Strings Challenge**

```jsx
// 1. Declare variables and capture input.
const adjective = prompt('Please type an adjective')
const verb = prompt('Please type a verb')
const noun = prompt('Please type a noun')

// 2. Combine the input with other words to create a story.
const sillySentance = <p>`There once was a ${adjective} ${noun} who wanted to use Javascript to ${verb} the coffee.`</p>

// 3, Display the story as a <p> inside the <main> element.
document.querySelector('main').innerHTML = sillySentance
```

![02-JS-Basics%20063b61fd805b4ffead33820dc7fede05/Screenshot_from_2020-10-04_15-46-54.png](02-JS-Basics%20063b61fd805b4ffead33820dc7fede05/Screenshot_from_2020-10-04_15-46-54.png)

**[Conditional Statements](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)**

if this is true do that

condition is either true or false

=== // triple equal = Strict Equality → true both value and type match

*conditional.js - the [if - else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)*

```jsx
const answer = prompt('Which planet is closest to the sun?')
**if** (answer === 'Mercury') {
	console.log('That is correct!')
} **else** {
	console.log('That's wrong.')
}
```

![02-JS-Basics%20063b61fd805b4ffead33820dc7fede05/Screenshot_from_2020-10-04_16-56-57.png](02-JS-Basics%20063b61fd805b4ffead33820dc7fede05/Screenshot_from_2020-10-04_16-56-57.png)

**Equality Operator** (==)

Tests if two values are the same

**[Strict Equality Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Strict_equality_using)** (===)

Compares the type as well as the value

Not Equal (≠)

Strict Inequality (≠=)

**Boolean Values**

A condition evaluate to a **[boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean)** which can only be true or false

*boolean.js*

```jsx
let correctGuess = false
const number = 6
const guess = prompt('Guess a number between 1 and 10')

if (+guess === number) {
	correctGuess = true
}

if (correctGuess === true) {
	console.log('You guessed the number!')
} else {
	console.log(`Sorry. The number was ${number}.`)
}
```

Note: the + before the number is the [Unary plus](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_plus_2).

You can simplify

```jsx
if (correctGuess === true) {
```

to

```jsx
if (correctGuess) {
```

**Program Multiple Outcomes**

![02-JS-Basics%20063b61fd805b4ffead33820dc7fede05/Screenshot_from_2020-10-04_17-19-05.png](02-JS-Basics%20063b61fd805b4ffead33820dc7fede05/Screenshot_from_2020-10-04_17-19-05.png)

if its hot & sunny → go to the beach

*making a choice among a variety of conditions with an **[else - if clause](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else#Using_else_if)***

```jsx
const weather = 'sun'

if (weather === 'sun') {
	console.log("It's sunny, so I'm going swimming")
} else if (weather === 'rain') {
	console.log("It's raining, so I will read a book.")
} else if (weather === 'snow') {
	console.log("It's snowing, so I'm going sledding")
} else {
	console.log("I don't know what I'll do today!")
}
```

**Testing Multiple Conditions with the && Operator**

The && — [Logical AND Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_AND) - combines two conditions to see if they pass

```jsx
let age = 25
if (20 < age && age < 30) console.log('Age is between 20 and 30')
```

**Testing Multiple Conditions with the || Operator**

The [Logical OR Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_OR) || - combines two conditions to see if either of them pass

```jsx
let agree = 'yes'
if (agree === 'yes' || agree === 'y') console.log('User agrees')
```

![02-JS-Basics%20063b61fd805b4ffead33820dc7fede05/Screenshot_from_2020-10-04_17-50-20.png](02-JS-Basics%20063b61fd805b4ffead33820dc7fede05/Screenshot_from_2020-10-04_17-50-20.png)

There is no limit to the number of operators you can have.

![02-JS-Basics%20063b61fd805b4ffead33820dc7fede05/Screenshot_from_2020-10-04_17-51-07.png](02-JS-Basics%20063b61fd805b4ffead33820dc7fede05/Screenshot_from_2020-10-04_17-51-07.png)

**Document Your Code with [Comments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Comments)**

- JavaScript provides ways to leave messages in your code. When you or another developer review your code later, these messages (or comments) can quickly help describe what's going on in the program. You can add comments anywhere in your JavaScript code; they're ignored by a web browser and don't affect how your program works.

Explain your code to other coders and future you.

or comment out code

// single line or in-line

/* Multi 

Line

*/

**Conditional Challenge - A Quiz App**

See [https://repl.it/@duliodenis/quizjs](https://repl.it/@duliodenis/quizjs)

![02-JS-Basics%20063b61fd805b4ffead33820dc7fede05/Screenshot_from_2020-10-04_18-20-27.png](02-JS-Basics%20063b61fd805b4ffead33820dc7fede05/Screenshot_from_2020-10-04_18-20-27.png)

![02-JS-Basics%20063b61fd805b4ffead33820dc7fede05/Screenshot_from_2020-10-04_18-23-47.png](02-JS-Basics%20063b61fd805b4ffead33820dc7fede05/Screenshot_from_2020-10-04_18-23-47.png)

NEXT:

![02-JS-Basics%20063b61fd805b4ffead33820dc7fede05/Screenshot_from_2020-10-04_18-24-24.png](02-JS-Basics%20063b61fd805b4ffead33820dc7fede05/Screenshot_from_2020-10-04_18-24-24.png)