# 07-JS-Arrays

# What is an Array?

In JavaScript, an [array](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays) is a "data structure" that provides a way to store and organize data.

```jsx
const shoppingList = [`bread`, `butter`, `honey`]
```

An array of Strings.

# Access Elements in an Array

To access an [element within an array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#Referring_to_array_elements), you use an "index" value, which is a number that indicates a position in the array.

![07-JS-Arrays%2094710e9607bb41b39b38635bc3d0a727/Screenshot_from_2020-10-11_14-34-57.png](07-JS-Arrays%2094710e9607bb41b39b38635bc3d0a727/Screenshot_from_2020-10-11_14-34-57.png)

Think of an array as a numbered list - to get an item in the list you need its number.

These arrays in JavaScript are **Zero Based** or **Zero Indexed** - this means the first index in the array is not one - its ZERO.

![07-JS-Arrays%2094710e9607bb41b39b38635bc3d0a727/Screenshot_from_2020-10-11_14-37-44.png](07-JS-Arrays%2094710e9607bb41b39b38635bc3d0a727/Screenshot_from_2020-10-11_14-37-44.png)

To log the first item in the list you'd use the zeroth index.

# Add Elements to an Array

Learn how to add elements to an array, as well as return the number of elements inside an array.

In JavaScript - an Array isn't just a Data Structure but its also an Object that allows you to call methods and access properties.

![07-JS-Arrays%2094710e9607bb41b39b38635bc3d0a727/Screenshot_from_2020-10-11_14-47-34.png](07-JS-Arrays%2094710e9607bb41b39b38635bc3d0a727/Screenshot_from_2020-10-11_14-47-34.png)

For example - you can find the length - or number of elements inside of it - of an array with the [length property](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length).

To add elements to the end of the array you can use [the push method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push).

```jsx
const instruments = ['piano', 'drums', 'trumpet']
instruments.push('guitar') // Adds 'guitar' to the end of the array

instruments.push('violin', 'triangle') // You can add more than one element at a time 
```

![07-JS-Arrays%2094710e9607bb41b39b38635bc3d0a727/Screenshot_from_2020-10-11_14-54-26.png](07-JS-Arrays%2094710e9607bb41b39b38635bc3d0a727/Screenshot_from_2020-10-11_14-54-26.png)

What if you needed to add an element to the beginning of the array? [unshift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) them.

```jsx
instruments.unshift('cowbell', 'tuba') // puts 'cowbell' and 'tuba' in the zeroth and first element
```

# Remove Elements From an Array

JavaScript provides [the pop() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) for removing elements from the end of an array, and [shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)() for removing elements from the beginning.

![07-JS-Arrays%2094710e9607bb41b39b38635bc3d0a727/Screenshot_from_2020-10-11_15-02-56.png](07-JS-Arrays%2094710e9607bb41b39b38635bc3d0a727/Screenshot_from_2020-10-11_15-02-56.png)

With these methods we can now code highly organized FIFO data structures called Queues.

(First In First Out)

Elements are **pushed** onto the back of the queue and dequeued from the front of the queue with a **shift**. The first is processed first the newest is processed last.

```jsx
const numbers = [100, 200, 300, 400, 500]
numbers.push(600) // => 100, 200, 300, 400, 500, 600
numbers.pop(600) // => 100, 200, 300, 400, 500
numbers.unshift(0) // => 0, 100, 200, 300, 400, 500
numbers.shift() // => 100, 200, 300, 400, 500
```

# Copy and Combine Arrays with the Spread Operator

Learn the basics of t[he spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) (...), a special syntax JavaScript provides to build, combine, and manipulate arrays quickly and more seamlessly.

> Article: [*Six great uses of the spread operator*](https://davidwalsh.name/spread-operator)

```jsx
const middle = ['lettuce', 'cheese', 'patty']
const burger = ['top bun', ...middle, 'bottom bum']

console.log(burger) // ['top bun', 'lettuce', 'cheese', 'patty', 'bottom bum']
```

the spread operator creates a copy and adds the values of the middle array as individual elements.

```jsx
const brass = ['trumpet', 'tuba']
const woodwind = ['flute', 'oboe']
const instruments = [...brass, ...woodwind] // ['trumpet', 'tuba', 'flute', 'oboe']
```

we can use the spread operator to combine arrays.

Another great use of the spread operator is to pass array elements as arguments to a function.

```jsx
const numbers = [12, 41, 3, 9, 45, 7]
console.log(Math.max(...numbers)
```

### **Making a copy of an array with the spread operator**

One of the main benefits of copying an array is that you preserve the values of the original array. For example, the original **`mathStudents`** and **`scienceStudents`** arrays remain unchanged (won't be mutated) if you decide to push or pop elements in and out of the copies of those arrays.

```jsx
'Marty',
  'Jennifer',
  'Lorraine',
  'Goldie'
];

const scienceStudents = [
  'Emmett', 
  'Clara', 
  'Needles',
  'Strickland'
];

const mathStudentsCopy = [...mathStudents];
const scienceStudentsCopy = [...scienceStudents];

// This affects the copied arrays only
//  The original arrays remain unchanged
mathStudentsCopy.pop();
scienceStudentsCopy.push('Marvin');
```

![07-JS-Arrays%2094710e9607bb41b39b38635bc3d0a727/Screenshot_from_2020-10-11_16-29-32.png](07-JS-Arrays%2094710e9607bb41b39b38635bc3d0a727/Screenshot_from_2020-10-11_16-29-32.png)

# Using a 'for' Loop to Iterate Over an Array

The [for loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) provides one way to loop (or iterate) through the elements in an array.

![07-JS-Arrays%2094710e9607bb41b39b38635bc3d0a727/Screenshot_from_2020-10-11_16-53-10.png](07-JS-Arrays%2094710e9607bb41b39b38635bc3d0a727/Screenshot_from_2020-10-11_16-53-10.png)

Use the for loop to iterate over an array of song names and display them on a web page.

```jsx
const playlist = ['So What', 'Respect', 'What a Wonderful World', 'At Last']
const createListItem = array => {
	let displayItems = ''
	for (let i = 0; i < array.length; i++) {
		displayItems += `<li>${array[i]}</li>`
	}
	return displayItems
}

document.querySelector('main').innerHTML = `<ol>${createListItems(playList)}</ol>`
```

### **Get the average of an array of scores**

In the following example, a **`for`** loop accesses each number in the **`scores`** array and adds it to the current value of **`total`**. When the loop completes, the console displays the average score by dividing the value of **`total`** by the length of the **`scores`** array.

```jsx
const scores = [ 20, 50, 75, 100, 115 ];
let total = 0;

for ( let i = 0; i < scores.length; i++ ) {
  total += scores[i];
}

console.log( total / scores.length );
```

# Useful Array Methods

As you gain more experience with arrays, you'll want to start learning and experimenting with other more advanced methods. We'll explore three other common and useful array methods:

- [join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)()
- [includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)()
- [indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)()

```jsx
const daysInWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

daysInWeek.join(', ');

const fruit = [
  'apple', 
  'orange', 
  'grapefruit', 
  'pineapple', 
  'strawberry'
];

fruit.includes('apple');
fruit.indexOf('apple');
fruit.indexOf('pear');
```

### **More useful array methods**

There are other useful array methods besides **`join()`**, **`includes()`**, and **`indexOf()`**. Make sure you spend some time on **[MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** to learn more about them.

- **`[sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)`** - Sort the elements of an array *in place* and return the sorted array.
- **`[isArray()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)`** - Determine whether the passed value is an **`Array`**.
- **`[concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)`** - Merge two or more arrays.
- **`[splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)`** - Change the contents of an array by removing or replacing existing elements and/or adding new elements in place.
- **`[slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)`** - Return a portion of an array into a new array.

### Why does indexOf() return -1 if it cannot locate an element in an array?

Consider the following code:

```jsx
const people = [ 'Maria', 'Alyssa', 'Toni', 'Lee', 'Reggie' ];
let personIndex = people.indexOf('Maria');  // 0

if ( personIndex ) {
 console.log(`${people[personIndex]} is in the array at index ${personIndex}.`);
}
```

The conditional checks if **`personIndex`** returns the index of an element in the **`people`** array. If the condition is **`true`**, the console logs the person passed to **`indexOf()`** and their index.

Now, if the index of the element passed to **`indexOf()`** is in the first position, it returns **`0`**. Remember, **`0`** is considered a "falsy" value, so the statement would not run if the condition evaluates to **`false`**. In the example above, even through 'Maria' is in the array (with an index of **`0`**), the message never displays in the console.

What if you pass **`indexOf()`** a value that is not in the array? For example:

```jsx
const people = [ 'Maria', 'Alyssa', 'Toni', 'Lee', 'Reggie' ];
let personIndex = people.indexOf('Guil');
```

In this case, the console still prints undefined is in the array at index -1. Why? 

**-1 is not considered false**, so the if statement runs.

### **1 is not "falsy"**

Set the conditional statement to run as long as the return value of **`indexOf()`** is not equal to **`1`**.

```jsx
const people = [ 'Maria', 'Alyssa', 'Toni', 'Lee', 'Reggie' ];
let personIndex = people.indexOf('Maria');  // 0

if ( personIndex !== -1) { // it's ok because we're checking for -1 only
 console.log(`${people[personIndex]} is in the array at index ${personIndex}.`);
}
```

# Search for a Value in an Array

We'll write a program using the join(), includes(), and indexOf() array methods you learned about earlier.

![07-JS-Arrays%2094710e9607bb41b39b38635bc3d0a727/Screenshot_from_2020-10-11_18-02-09.png](07-JS-Arrays%2094710e9607bb41b39b38635bc3d0a727/Screenshot_from_2020-10-11_18-02-09.png)

We'll keep a product list.

And return whether a product is in stock and if so what number its on the list.

![07-JS-Arrays%2094710e9607bb41b39b38635bc3d0a727/Screenshot_from_2020-10-11_18-02-31.png](07-JS-Arrays%2094710e9607bb41b39b38635bc3d0a727/Screenshot_from_2020-10-11_18-02-31.png)

```jsx
const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
const search = prompt('Search for a product.');
let message;

if ( inStock.includes(search) ) {
	message = `Yes, we have <strong>${search}</strong>.`
} else {
	message = `Sorry, we do not have <strong>${search}</strong>.`
}

document.querySelector('main').innerHTML = `<p>${message}</p>`
```

# Locate and Join Array Elements

Continue our program using the join(), includes(), and indexOf() array methods you learned about earlier.

```jsx
const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
const search = prompt('Search for a product.');
let message;

if (!search) {
	message = '<strong>In stock:</strong> ${inStock.join(', '}'
} else if ( inStock.includes(search.toLowerCase()) ) {
	message = `Yes, we have <strong>${search}</strong>. It's #${inStock.indexOf(search.toLowerCase()) + 1} on the list`}`
} else {
	message = `Sorry, we do not have <strong>${search}</strong>.`
}

document.querySelector('main').innerHTML = `<p>${message}</p>`
```

Why repeat search.toLowerCase() vs. assigning it to a variable and reusing it? For example:

```jsx
const search = prompt('Search for a product.');
const searchText = search.toLowerCase();

inStock.includes(searchText);
inStock.indexOf(searchText);
```

If the user clicks the "Cancel" button in the prompt dialogue, the variable searchText would point to null. The JavaScript interpreter throws an error when you call toLowerCase() on a returned null value -- there's nothing to convert to lowercase:

```jsx
const search = prompt('Search for a product.');
const searchText = search.toLowerCase();
// Uncaught TypeError: Cannot read property 'toLowerCase' of null
```

Following is another way you might convert the value assigned to search to all lowercase. If search points to a truthy value (not null, for example), then convert it to lowercase:

```jsx
const inStock = [ ... ];
let message;
let search = prompt('Search for a product.');

if ( search ) {
  search = search.toLowerCase();
}

if ( !search ) {
  message = `<strong>In stock:</strong> ${inStock.join(', ')}`;
} else if ( inStock.includes(search) ) {
  message = `Yes, we have <strong>${search}</strong>. It's #${inStock.indexOf(search) + 1} on the list!`;
} else {
  message = `Sorry, we do not have <strong>${search}</strong>.`;
}
```

That way, you don't have to repeat calling **`toLowerCase()`** in the conditional.

---

### **A different approach with only `indexof()`**

There's another way you might write the product search without having to use **`includes()`** to check whether the **`inStock`** array includes a specific value. Remember, **`indexOf()`** returns the index of a given element inside an array, or -**`1`** if it's not present.

First, pass the **`search`** value to **`indexOf()`**. In the **`else if`** clause, check *if* the product index is not -**`1`**. Then use the value of **`productIndex + 1`** to display the product's number in the list:

```jsx
const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
let search = prompt('Search for a product.');
let productIndex;
let message;

if ( search ) {
  search = search.toLowerCase();
  productIndex = inStock.indexOf(search);
}

if ( !search ) {
  message = `<strong>In stock:</strong> ${inStock.join(', ')}`;
} else if ( productIndex !== -1 ) {
  message = `Yes, we have <strong>${search}</strong>. It's #${productIndex + 1} on the list!`;
} else {
  message = `Sorry, we do not have <strong>${search}</strong>.`;
```

![07-JS-Arrays%2094710e9607bb41b39b38635bc3d0a727/Screenshot_from_2020-10-11_21-33-32.png](07-JS-Arrays%2094710e9607bb41b39b38635bc3d0a727/Screenshot_from_2020-10-11_21-33-32.png)

# What is a Multidimensional Array?

Arrays in JavaScript can contain numbers, strings, booleans - and even other arrays.

![07-JS-Arrays%2094710e9607bb41b39b38635bc3d0a727/Screenshot_from_2020-10-11_21-43-06.png](07-JS-Arrays%2094710e9607bb41b39b38635bc3d0a727/Screenshot_from_2020-10-11_21-43-06.png)

These 2D Arrays are list a list of lists - for example a list of students and their test grades.

We'll learn how to create and work with arrays that contain other arrays, or "multidimensional arrays".

![07-JS-Arrays%2094710e9607bb41b39b38635bc3d0a727/Screenshot_from_2020-10-11_21-46-25.png](07-JS-Arrays%2094710e9607bb41b39b38635bc3d0a727/Screenshot_from_2020-10-11_21-46-25.png)

To access the first [zeroth] student last grade we would chain a second set of square brackets with the index of the last element.

![07-JS-Arrays%2094710e9607bb41b39b38635bc3d0a727/Screenshot_from_2020-10-11_21-47-42.png](07-JS-Arrays%2094710e9607bb41b39b38635bc3d0a727/Screenshot_from_2020-10-11_21-47-42.png)

# Create a Multidimensional Array

Let's create a program that uses a multidimensional array to hold songs and artists, and then displays a playlist of each song, with the artist who recorded it and the duration of the song.

![07-JS-Arrays%2094710e9607bb41b39b38635bc3d0a727/Screenshot_from_2020-10-11_22-58-07.png](07-JS-Arrays%2094710e9607bb41b39b38635bc3d0a727/Screenshot_from_2020-10-11_22-58-07.png)

```jsx
const playlist = [
	['So What', 'Miles Davis', '9:04'],
  ['Respect', 'Aretha Franklin', '2:45'],
  ['What a Wonderful World', 'Louis Armstrong', '2:21'],
  ['At Last', 'Ella Fitzgerald', '4:18']
];

function createListItems( array ) {
  let items = ''
  for ( let i = 0; i < array.length; i++ ) {
		items += `<li>${ array[i][0] } by ${array[i][1]} - ${array[i][2]}</li>`
  }
  return items
}

document.querySelector('main').innerHTML = `
  <ol>
    ${createListItems(playlist)}
  </ol>`
```

### **Spread syntax and multidimensional arrays**

> Note: Spread syntax effectively goes one level deep while copying an array. Therefore, it may be unsuitable for copying multidimensional arrays, as the following example shows.

```jsx
const instruments = [...brass];

instruments.shift().shift(); 
//  "trumpet"

//  Notice how the brass array is also affected by this:
brass
//  [ [], ["tuba"], ["trombone"] ]
```

See: [MDN Copy an Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Copy_an_array)

# Build a Quiz Challenge

It's time to put what you've learned about arrays into practice! 

In this exercise, we'll build a quiz app.

```jsx
// 1. Create a multidimensional array to hold quiz questions and answers
const quiz = [[]]

// 2. Store the number of questions answered correctly
quiz = [['how many states in the us', '50'],
				['what is the capital of brazil', 'brasilia'],
				['how hot is lightning', '50K F']
			 ]

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
let correct = 0
for (let i = 0; i < quiz.length; i++) {
	let input = prompt(quiz[i][0])
	if (input === quiz[i][1]) {
		correct++
	}
}

// 4. Display the number of correct answers to the user
console.log(`You got ${correct} correct answers.`)
```

![07-JS-Arrays%2094710e9607bb41b39b38635bc3d0a727/Screenshot_from_2020-10-11_23-34-35.png](07-JS-Arrays%2094710e9607bb41b39b38635bc3d0a727/Screenshot_from_2020-10-11_23-34-35.png)

Next we'll improve the program.

**Note**: 

The return value of the **`prompt()`** method is always a string. If your question answers are numeric values, you'll need to convert the value of the **`response`** variable to a number, otherwise the condition will always evaluate to **`false`**.

The unary plus operator (**`+`**) provides a quick way of converting a string to a number. Place a plus symbol just before the **`response`** variable:

```jsx
if ( +response === answer ) { 
  ... 
}
```

We can use a previous function of creating list items in order to put elements on a correct and incorrect question lists:

```jsx
function createListItems(array) {
  let items = ''
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i]}</li>`
  }
  return items
}
```

![07-JS-Arrays%2094710e9607bb41b39b38635bc3d0a727/Screenshot_from_2020-10-12_22-16-10.png](07-JS-Arrays%2094710e9607bb41b39b38635bc3d0a727/Screenshot_from_2020-10-12_22-16-10.png)