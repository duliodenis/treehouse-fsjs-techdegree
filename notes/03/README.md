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