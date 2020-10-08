# 03-JS-Numbers

In this course we cover JavaScript's [numeric data types](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math#Types_of_numbers)

![03-JS-Numbers%20f567918810604545950953392e8e4d96/Screenshot_from_2020-10-04_18-34-22.png](03-JS-Numbers%20f567918810604545950953392e8e4d96/Screenshot_from_2020-10-04_18-34-22.png)

![03-JS-Numbers%20f567918810604545950953392e8e4d96/Screenshot_from_2020-10-04_18-34-35.png](03-JS-Numbers%20f567918810604545950953392e8e4d96/Screenshot_from_2020-10-04_18-34-35.png)

![03-JS-Numbers%20f567918810604545950953392e8e4d96/Screenshot_from_2020-10-04_18-38-39.png](03-JS-Numbers%20f567918810604545950953392e8e4d96/Screenshot_from_2020-10-04_18-38-39.png)

![03-JS-Numbers%20f567918810604545950953392e8e4d96/Screenshot_from_2020-10-04_18-38-55.png](03-JS-Numbers%20f567918810604545950953392e8e4d96/Screenshot_from_2020-10-04_18-38-55.png)

![03-JS-Numbers%20f567918810604545950953392e8e4d96/Screenshot_from_2020-10-04_18-39-09.png](03-JS-Numbers%20f567918810604545950953392e8e4d96/Screenshot_from_2020-10-04_18-39-09.png)

![03-JS-Numbers%20f567918810604545950953392e8e4d96/Screenshot_from_2020-10-04_18-39-18.png](03-JS-Numbers%20f567918810604545950953392e8e4d96/Screenshot_from_2020-10-04_18-39-18.png)

**Create a Program with Math**

```jsx
const secsPerMin = 60
const minsPerHour = 60
const hoursPerDay = 24
const daysPerWeek = 7
const weeksPerYear = 52

const secondsPerDay = secsPerMin * minPerHour * hoursPerDay
console.log(`There are ${secondsPerDay} seconds in a dey`)

const yearsAlive = 25 
const secsAlive= secsPerMin * minPerHour * hoursPerDay * daysPerWeek * weeksPerYear * yearsAlive
console.log(`I've been alive ${secsAlive} seconds in the past ${yearsAlive} years`)
```

**Treating Strings As Numbers**

```jsx
const HTMLBadges = prompt('How many badges do you have?')
const CSSBadges = prompt('How many CSS badges do you have?')

const totalBadges = HTMLBadges + CSSBadges
console.log(totalBadges)
```

In the code above if the input is 

HTML badges = 10 and

CSS badges = 5

the total would be 105

Instead of addition - the '+' operator is doing string concatenation.

Before doing any conversion JS has a special operator to verify the type of a variable to evaluate.

[typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) HTMLBadges

**Converting Strings to Numbers**

One way to do this is with the [parseInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)() method which converts a string into a whole number or  integer.

```jsx
const totalBadges = parseInt(HTMLBadges) + parseInt(CSSBadges)
console.log(totalBadges)
```

totalBadges now equals 15 for the same 10 and 5 inputs.

If there were decimal values then the conversion method equivalent is [parseFloat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)().

```jsx
const pi = "3.14"
console.log( typeof parseFloat(pi) ) // => number
```

[Unary + Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_plus_2) is another way to convert strings into numbers and works with both integers and float values.

```jsx
const totalbadges = +HTMMLBadges + +CSSBadges
```

![03-JS-Numbers%20f567918810604545950953392e8e4d96/Screenshot_from_2020-10-06_21-57-03.png](03-JS-Numbers%20f567918810604545950953392e8e4d96/Screenshot_from_2020-10-06_21-57-03.png)

![03-JS-Numbers%20f567918810604545950953392e8e4d96/Screenshot_from_2020-10-06_22-01-50.png](03-JS-Numbers%20f567918810604545950953392e8e4d96/Screenshot_from_2020-10-06_22-01-50.png)

**Perform Operations with the Math Object**

In JS [Primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) Data Types are basic values built-into the language such as Strings, Booleans, Floats.

But JS adds a special wrapper around these primitive types so that we can alter them - this wrapper is called an **Object**.

These Objects have **properties** - with are variable that is associated with the object

![03-JS-Numbers%20f567918810604545950953392e8e4d96/Screenshot_from_2020-10-06_22-28-37.png](03-JS-Numbers%20f567918810604545950953392e8e4d96/Screenshot_from_2020-10-06_22-28-37.png)

and actions or **methods** that you can perform on the object

![03-JS-Numbers%20f567918810604545950953392e8e4d96/Screenshot_from_2020-10-06_22-30-46.png](03-JS-Numbers%20f567918810604545950953392e8e4d96/Screenshot_from_2020-10-06_22-30-46.png)

In this section we'll look at the [Math Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) used to perform complex mathematical operations on numbers.

```jsx
[Math.round](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round)(2.2) // => 2
Math.round(44.9) // => 45
```

The Math object is unusual in that you call its properties and methods by using the word Math with a capital letter.

**Create a Random Number**

JavaScript lets you create random numbers, which you can use to add variety and surprise in your programs. You generate a random number in JavaScript via a method named [Math.random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)().

*The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1) with approximately uniform distribution over that range — which you can then scale to your desired range.*

Because this returns decimals values - in order to convert these to integer values we can use either of these functions:

[Math.floor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)() - rounds down to the floor

[Math.ceil](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil)() - rounds the number up to the ceiling

![03-JS-Numbers%20f567918810604545950953392e8e4d96/Screenshot_from_2020-10-06_22-44-12.png](03-JS-Numbers%20f567918810604545950953392e8e4d96/Screenshot_from_2020-10-06_22-44-12.png)

![03-JS-Numbers%20f567918810604545950953392e8e4d96/Screenshot_from_2020-10-06_22-48-46.png](03-JS-Numbers%20f567918810604545950953392e8e4d96/Screenshot_from_2020-10-06_22-48-46.png)

In programming in general - code runs **Inside Out** - whats inside the inner most parenthesis gets evaluated before the Math.floor method.

```jsx
const dieRoll = Math.floor ( Math.random() * 6 ) + 1
console.log(`You rolled a ${dieRoll}.`)
```

**Random Number Challenge**

```jsx
// Collect a user's input.
const input = ("Enter a number and I'll pick a random number between 1 and this number")

// Convert that input from a string to a number. 
// This will be the highest possible random number in the range of numbers
// starting from 1.
const number = parseInt(input)

// Use the Math.random() method to create a random number using the number
// provided by the user.
const randomNumber = Math.floor( Math.random() * number) + 1

// Create a message displaying the random number. 
// You can use any method you want to display the message.
// For instance, print it to the console, display it on the page, or with an alert.
console.log(`${randomNumber} is a random number between 1 and ${input}.`)
```

```jsx
// version 2
// Update the random number program to ask for two numbers, 
// then provide a random number between the two.
const low = ("Enter a low number and I'll pick a random number between it and a high number")
const high = ("Enter a high number and I'll pick a random number between the low and this number")
const lowNumber = parseInt(low)
const highNumber = parseint(high)

if (lowNumber && highNumber) {
	const randomNumber = Math.floor( Math.random() * highNumber) + lowNumber
	console.log(`${randomNumber} is a random number between ${lowNumber} and ${highNumber}.)
} else {
	console.log('Enter both a low and high number')
}
```

![03-JS-Numbers%20f567918810604545950953392e8e4d96/Screenshot_from_2020-10-07_22-20-42.png](03-JS-Numbers%20f567918810604545950953392e8e4d96/Screenshot_from_2020-10-07_22-20-42.png)

![03-JS-Numbers%20f567918810604545950953392e8e4d96/Screenshot_from_2020-10-07_22-21-02.png](03-JS-Numbers%20f567918810604545950953392e8e4d96/Screenshot_from_2020-10-07_22-21-02.png)

```jsx
// Convert the input to a number
const lowNumber = parseInt(inputLow);
const highNumber = parseInt(inputHigh);

// Check if lowNumber OR highNumber is not a number
if ( isNaN(lowNumber) || isNaN(highNumber) ) {
  console.log('You need to provide two numbers. Try again.');
} else {
  // Use Math.random() and the user's number to generate a random number
  const randomNumber = Math.floor( Math.random() * (highNumber - lowNumber + 1) ) + lowNumber;

  // Create a message displaying the random number
  console.log(`${randomNumber} is a random number between ${lowNumber} and ${highNumber}.`);
}
```

![03-JS-Numbers%20f567918810604545950953392e8e4d96/Screenshot_from_2020-10-07_22-40-13.png](03-JS-Numbers%20f567918810604545950953392e8e4d96/Screenshot_from_2020-10-07_22-40-13.png)