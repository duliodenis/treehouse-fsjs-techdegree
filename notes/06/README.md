# 06-JS-Loops

# **What is a Loop?**

In programming, a loop is a way to repeat the same set of actions a certain number of times or until a specific condition is true.

Three types of loops in this course:

- [while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
- [do...while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)
- for

# **The while loop**

Use the `while` statement to create a loop that executes code as long as a condition evaluates to true.

```jsx
if () {
	// runs once if the conditional is true
}

while () {
	// keeps running while the conditional is true
}
```

Here's an example:

```jsx
let counter = 0
while (counter < 10) {
	console.log(`The counter is at ${counter}.`)
	counter++
}
```

**the do...while loop**

Use `do...while` to create a loop that executes code until the test condition evaluates to false.

```jsx
do {
	// executes the do block while the conditional is true
	// like while except executes at least once
} while ()
```

Here's the example:

```jsx
let counter = 0
do {
	console.log(`The counter is at ${counter}.`)
	counter++
} while (counter < 10)
```

# **Add One to a Number with the Increment Operator (++)**

## **Increment operator**

**Here's a tip.** It's so common in JavaScript to increment a number value by one that there's a shorthand operator (called the "increment operator") that's used frequently with loops. Use it on your *counter* variable by replacing **`+= 1`** with two plus symbols (**`++`**).

1. **Open the file `do-while.js`.**
2. In the **`do`** block, use the increment operator to increase the number assigned to **`counter`** by one each time the loop runs:

```jsx
function getRandomNumber(upper) { ... }

let counter = 0;
do {
  console.log( `The random number is ${getRandomNumber(10)}` );
  counter++; // increment operator
} while ( counter < 10 );
```

Similar to using the addition assignment operator and adding 1, the increment operator adds 1 to the current number value stored in counter and returns a value each time through the loop. The approach you use is up to you; the course will use the increment operator moving forward.

### **Decrement operator**

JavaScript also provides the decrement operator (**`-`**), which subtracts one from an integer value. For example:

```jsx
function getRandomNumber(upper) { ... }

let counter = 10;
do {
  console.log( `The random number is ${getRandomNumber(10)}` );
  counter--; // decrement operator
} while ( counter > 0 );
```

This time, the loop counts down from 10 to 0, decreasing the value assigned to the counter variable by one each time through the loop. It's the same as counter -= 1.

# **Beware of Infinite Loops!**

One important concept you should keep in mind about loops is the *infinite loop*. An infinite loop, as the name suggests, is a loop that keeps running forever.

For example, a **`while`** loop's condition gets evaluated *before* the loop runs. That is, if the test condition is *true* at the beginning, the loop runs:

```jsx
while ( condition ) {
  // execute code if condition is true
}
```

You need a way to break out of the loop. In other words, something has to change inside the loop to stop it from running. There are a few ways to do this. One way is with a keyword you'll learn about in the next stage called **`break`**, which lets you exit a loop.

As you've learned, one common method for exiting a loop is to change a variable inside the loop to cause the test condition to evaluate to **`false`**. For example, increment the value assigned to a **`counter`** variable to stop the loop when **`counter`** is no longer less than **`10`**:

```jsx
let counter = 0;
while ( counter < 10 ) {
  // execute code
  counter++;
}
```

## **What if the condition is always true?**

If the test condition is always **`true`**, the loop never stops. Programmers call this an infinite (or endless) loop, and it's generally a bad thing. For example, the statements in the following **`while`** loop would execute forever because the condition never becomes **`false`**:

```jsx
while ( true ) {
  // execute code endlessly
}
```

*true is always true, so there's no way that the above condition will ever become not true; therefore, the code inside the while block runs on and on and on.*

Consider the following while statement:

```jsx
let counter = 0;
while ( counter >= 0 ) {
  console.log(`The counter is: ${counter}`)
  counter++;
}
```

The counter starts at 0 and increases each time through the loop. Since counter will always be greater than or equal to 0, the condition will ALWAYS be true.

## **Avoid Infinite Loops**

An infinite loop is like never telling runners in a race when they've gone around the track enough times and completed the race. Without checking that the runner has made it around the track enough times, the runner will keep on running and running and running in an endless loop. Eventually, the racer will become exhausted and collapse. A web browser stuck in an infinite loop can also run out of energy, crash, or at least stop the web page from working any longer.

![06-JS-Loops%200911a92fcdb94692800187ff19fd3587/Untitled.png](06-JS-Loops%200911a92fcdb94692800187ff19fd3587/Untitled.png)

An infinite loop endlessly logging numbers to the console

Ensure that the condition in a loop eventually becomes false – otherwise, the loop will never end. If you accidentally create an infinite loop, it could crash your browser or computer. It's important to be aware of infinite loops so you can avoid them.

Now you have two different types of loops in your JavaScript toolkit. In the next stage, you'll learn the most common type of loop -- the for loop.

![06-JS-Loops%200911a92fcdb94692800187ff19fd3587/Screenshot_from_2020-10-10_20-05-07.png](06-JS-Loops%200911a92fcdb94692800187ff19fd3587/Screenshot_from_2020-10-10_20-05-07.png)

# **The for Loop**

The `[for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)` loop is a more compact variation of the while loop, with similar parts, and it's useful when you know how many times you want to repeat an action.

```jsx
let counter = 0
while (counter < 10) {
	console.log(counter)
	counter++
}
// vs
for (let counter = 0; counter < 10; counter++) {
	console.log(counter)
}
```

**Dynamically Display HTML with a Loop**

Use a `for` loop to build a string holding HTML, then display it on a web page.

```jsx
const main = document.querySelector('main')
let displayString = ""
for(let i = 0; i < 1; i++) {
	displayString += `<div>${i}</div>`
}
main.innerHTML = displayString
```

# **Exit a Loop**

In each of the three types of loops you've worked with so far, there's some "exit" condition. In other words, when a specific condition is no longer **`true`**, like a counter variable is no longer less than **`10`**, or less than or equal to **`100`**, the loop ends.

```jsx
for ( let i = 0; i <= 100; i++ ) {
 // code to run
}
```

But that's not the only way to exit a loop. JavaScript includes a "**[break](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break)**" statement which, when encountered inside a loop, immediately exits the loop.

## **Learn and practice how to exit a loop**

1. In your project folder, open the file **`break.js`**.
2. In **`index.html`**, update the **`src`** attribute of the **`<script>`** tag:

```jsx
<body>
    ...
    <script src="js/break.js"></script>
  </body>
```

The break.js file contains a for loop that gives the user five attempts to guess a "secret" word.

```jsx
let message = 'Access denied :(';

for ( let i = 5; i >= 1; i-- ) {  
  let guess = prompt(`Enter the secret word. You have ${i} tries.`);
  if ( guess === secretWord ) {
    message = 'Welcome to the secret loop world!';
  }
}

alert(message);
```

> *Notice how the loop starts counting down from 5 and uses the decrement operator (--) to decrease the value of i by one each time through the loop.*

Each time the loop runs, it opens a prompt dialogue asking the user to "Enter the secret word," and it displays the number of tries they have to guess it. When the **`i`** counter is no longer less than or equal to **`1`**, the loop ends.

The value of the **`guess`** variable gets updated with the user's guess each time through the loop. The **`if`** statement checks if the user's guess is correct by comparing the value of **`guess`** to the string that's assigned to the **`secretWord`** variable. If this condition evaluates to **`true`**, the message "Welcome to the secret loop world!" displays in an alert dialog box.

If the value of **`guess`** does not match the value assigned to **`secretWord`** after five loop iterations, an alert dialog displays with the message "Access denied :(".

## **Break out of a loop**

Currently, the loop continues to run and keeps asking the user to guess the secret word until it has run five times -- even if they've already entered a guess that matches the secret word.

When the values match, the loop should end, and the "Welcome" message should pop up on the page.

1. **Escape (or break out of) the `for` loop with a `break` statement**. In the **`if`** statement, add the **`break`** keyword below the **`message`** variable assignment:

```jsx
for ( let i = 5; i >= 1; i-- ) {  
  let guess = prompt(`Enter the secret word. You have ${i} tries.`);
  if ( guess === secretWord ) {
    message = 'Welcome to the secret loop world!';
    break;  // immediately terminate the loop
  }
}

alert(message);
```

The **`break`** statement terminates (or stops) the execution of the loop entirely. Then control jumps to the next statement in the program -- or whatever needs to run after the loop.

Now, if the user guesses the secret word before five tries, the loop immediately ends, and the "Welcome" message appears on the page.

## **One more example**

Following is another example of using a **`break`** statement in a loop. Evaluate this code and run it in your browser's JavaScript console -- just for fun:

```jsx
const tMinus = 10;
let message = 'Liftoff! 🚀';

for ( let i = tMinus; i >= 1; i-- ) { 
  let status = prompt(`T-Minus ${i}... Continue? (Y/N)`);
  if ( status === null || status.toLowerCase() === 'n' ) {
    message = 'Abort launch!';
    break;
  }
}

alert(message);
```

Notice how the looping behavior changes when you omit the **`break`** keyword.

You may have noticed that the **`break`** statement works like the **`return`** statement in a function. Any code inside the loop that appears after the **`break`** statement will never run.

---

# The Refactor Challenge

In this challenge, you will use a loop to reduce the repetition of code in a program - in order to stay [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself). This is called [refactoring](https://en.wikipedia.org/wiki/Code_refactoring).

![06-JS-Loops%200911a92fcdb94692800187ff19fd3587/Screenshot_from_2020-10-11_10-59-09.png](06-JS-Loops%200911a92fcdb94692800187ff19fd3587/Screenshot_from_2020-10-11_10-59-09.png)

A common improvement is to review and improve code based on the DRY principle.

> DRY Principle

- Reduce the repetition of code in a program
- Loops help you write DRY code
- JavaScript functions embrace the DRY principle