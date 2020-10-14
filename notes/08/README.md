# 08-JS-Objects

Objects are an essential part of JavaScript; they provide a flexible way to keep track of data by associating a name with a particular value. In this course, we'll learn [the basics of JavaScript objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics) as a data structure (using objects to store key/value pairs).

# What is an Object?

A JavaScript object has properties and methods. 

A property is like a variable that belongs to the object, and a method is something the object can "do," or that can be "done" to the object. 

Let's learn the syntax for creating an [object literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Object_literals) that stores data as property/value pairs.

```jsx
// object literal - empty object
const student = {}

// object literal - with a key-value pair
const student = {
	name: 'Quincy',
	grades: [85, 90, 95, 100]
}
```

# Create an Object Literal

Let's create an object literal containing various pieces of information about a person.

```jsx
const person = {
	name: 'Edward',
	city: 'New York',
	age: 37,
	isStrudent: true,
	skills: ['JavaScript', 'HTML', 'CSS']
}

```

![08-JS-Objects%20a14174646a6a4bcaa66e8f6ea8aaabcc/Screenshot_from_2020-10-12_22-42-58.png](08-JS-Objects%20a14174646a6a4bcaa66e8f6ea8aaabcc/Screenshot_from_2020-10-12_22-42-58.png)

if we had an array we'd access the first element with the index value of zero

# Access Object Properties

Let's learn how to access and use an object's data in your program.

![08-JS-Objects%20a14174646a6a4bcaa66e8f6ea8aaabcc/Screenshot_from_2020-10-12_22-44-52.png](08-JS-Objects%20a14174646a6a4bcaa66e8f6ea8aaabcc/Screenshot_from_2020-10-12_22-44-52.png)

we can use bracket notation using the property's name as a string

![08-JS-Objects%20a14174646a6a4bcaa66e8f6ea8aaabcc/Screenshot_from_2020-10-12_22-45-58.png](08-JS-Objects%20a14174646a6a4bcaa66e8f6ea8aaabcc/Screenshot_from_2020-10-12_22-45-58.png)

the second, and more common way, is to use dot notation

```jsx
// continuing the person object
const message = `Hi, I'm ${person.name}. I live in ${person.city}`
// => Hi, I'm Edward. I live in New York.
```

# Set the Value of Object Properties

Let's use dot notation to set the value of an object's property and add new properties to an object.

```jsx
// use dot notation to set the value of a property
student.name = 'Lizzie'
// you can even add new properties to an object this way
student.city = 'New York'
```

# Using const with Arrays and Objects

When working with numbers, strings, and booleans, you learned that you could not change (or manipulate) the value of a constant through reassignment. The same goes for any value of a constant variable. You cannot reassign objects and arrays, either.

Unlike strings, numbers, and booleans, objects and arrays have methods and properties that modify the object or array. Let's review how objects and arrays work with **`const`**.

## **`const` and Arrays**

Consider the following code:

```jsx
const days = ["Monday"]
```

The value of the variable days is an array holding one item. Even though days is a constant, you're able to modify the array assigned to it. For example, to add another day to the array, you can use the .push() method:

```jsx
const days = ["Monday"];
days.push("Tuesday");
console.log(days) // ["Monday", "Tuesday"]
```

Logging the value of **`days`** to the console returns **`["Monday", "Tuesday"]`**.

## **`const` and Objects**

Let's see the results of modifying an object assigned to a constant:

```jsx
const person = {
  first_name: "Patrick"
}
```

To add a last_name property to the person object, use person.last_name, like so:

```jsx
const person = {
  first_name: "Patrick"
}
person.last_name = "Hope"
console.log(person) // {first_name: "Patrick", last_name: "Hope"}
```

Again, no Uncaught TypeError as would happen if you try to reassign a constant. Logging person to the console returns the new object: {first_name: "Patrick", last_name: "Hope"}.

Remember, const does not prevent the arrays and objects assigned to variables from being modified; it only prevents the variable itself from being reassigned or overwritten completely. For example, attempting to override person to equal another object literal throws an error:

```jsx
const person = {
  first_name: "Patrick"
};
person = {first_name: "Jesse"} 
// Uncaught TypeError: Assignment to constant variable.
```

This is because you're attempting to reassign person to a new object. However, if you modify the first_name property by assigning it a new value, it does not produce errors:

```jsx
const person = {
  first_name: "Patrick"
};
person.first_name = "Jesse"
person.last_name = "Hope";
// {first_name: "Jesse", last_name: "Hope"}
```

![08-JS-Objects%20a14174646a6a4bcaa66e8f6ea8aaabcc/Screenshot_from_2020-10-12_23-07-53.png](08-JS-Objects%20a14174646a6a4bcaa66e8f6ea8aaabcc/Screenshot_from_2020-10-12_23-07-53.png)

# Use `for in` to Loop Through an Object's Properties

Use a f[or...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) loop to access each key (or property name) in an object.

![08-JS-Objects%20a14174646a6a4bcaa66e8f6ea8aaabcc/Screenshot_from_2020-10-12_23-10-03.png](08-JS-Objects%20a14174646a6a4bcaa66e8f6ea8aaabcc/Screenshot_from_2020-10-12_23-10-03.png)

```jsx
const composer = {
  name: 'Edward Ellington',
  nickname: 'Duke',
  genres: ['jazz', 'swing'],
  instrument: 'piano'
};

// logs each of the property names of the composer object to the console
for (let key in composer) {
  console.log(key)
}

// logs the property names, including the property values
// for example: 'instrument: piano'.
for (let key in composer) {
  console.log(`${key}: ${composer[key]}`)
}
```

# **Useful JavaScript Object Methods**

You've learned that with **`for...in`**, you're able to loop (or iterate) over the properties of an object literal, and access each property's value. For example:

```jsx
const person = {
  name: 'Reggie',
  role: 'Software developer',
  skills: ['JavaScript', 'HTML', 'CSS'],
  isTeacher: true
};

for ( let prop in person ) {
  console.log(prop);
}
```

The **`for...in`** loop above calls the **`console.log()`** method four times, returning the name of each property in the **`person`** object.

Similar to arrays, JavaScript objects have useful built-in methods for retrieving data from an object. In this step, we'll review the methods **`Object.keys()`** and **`Object.values()`**, both return an array containing an object's properties and values, respectively.

## **Object.keys()**

The **`Object.keys()`** method returns an **array** containing the property names (or keys) of an object. Consider the following code:

```jsx
const person = {
  name: 'Reggie',
  role: 'Software developer',
  skills: ['JavaScript', 'HTML', 'CSS'],
  isTeacher: true
};

// Store the keys of the `person` object in `personProps`
const personProps = Object.keys(person); 
console.log(personProps);
```

```jsx
> (4) ["name", "role", "skills", "isTeacher"]
```

Notice how the array returned by **`Object.keys(person)`** lists the property names in the order they appear inside the **`person`** object.

### **Check the length of an object**

You learned that you use the **`length`** property to get the number of characters inside a string and return the number of elements inside an array. Object literals, however, do not have a **`length`** property. So if you wanted to check the length of an object (the number of properties inside it), calling **`person.length`**, for example, would return **`undefined`**.

Since **`Object.keys()`** stores an object's keys inside a new array, you can use it for checking the length of an object. For example:

```jsx
const person = {
  name: 'Reggie',
  role: 'Software developer',
  skills: ['JavaScript', 'HTML', 'CSS'],
  isTeacher: true
};

console.log( Object.keys(person).length );  // 4
```

## **Object.values()**

The **`Object.values()`** method returns an array of a given object's property **values**, in the same order as provided by a **`for...in`** loop. For example:

```jsx
const person = {
  name: 'Reggie',
  role: 'Software developer',
  skills: ['JavaScript', 'HTML', 'CSS'],
  isTeacher: true
};

// Store the `person` object's property values in `personVals`
const personVals = Object.values(person); 
console.log(personVals);
```

```jsx
> (4)
[
  "Reggie",
  "Software developer",
  ["JavaScript","HTML","CSS"],
  true
]
```

The array returned by **`Object.values(person)`** lists the property values of the **`person`** object.

## **The handy spread operator**

In a previous course on JavaScript arrays, you learned how to copy and combine arrays with the spread operator (**`...`**).

You can use the spread operator to copy key/value pairs from one object to another. Evaluate the following objects:

```jsx
const name = {
  firstName: 'Reggie',
  lastName: 'Williams',
};

const role = {
  title: 'Software developer',
  skills: ['JavaScript', 'HTML', 'CSS'],
  isTeacher: true
};

// merge `name` and `role` into a `person` object
const person = {  
  ...name,
  ...role
};
console.log(person);
```

```jsx
{
  firstName: "Reggie",
  lastName: "Williams",
  title: "Software developer",
  skills: ["JavaScript", "HTML", "CSS"],
  isTeacher: true
}
```

In this case, the spread operator produces the same results as with arrays -- it merges the name and role objects into one person object.

# Store Objects in Arrays

Arrays let you group values to build complex data structures. With an array, you store a collection of elements you can access by their position (or index). Objects take that concept further by providing a way to structure related data that's easy to read and retrieve using key/value pairs. It's common to combine the two by creating an array of objects.

```jsx
const questions = [
  { question: 'How many planets are in the Solar System?', answer: '8' },
  { question: 'How many continents are there?', answer: '7' },
  { question: 'How many legs does an insect have?', answer: '6' },
  { question: 'What year was JavaScript created?', answer: '1995' }
];
```

Above is an Array of objects

# Build an Object Challenge

Time to put your knowledge of JavaScript Objects to the test. In this practice challenge, you'll use JavaScript loops, arrays, and objects to create a script that builds a pet directory, then displays it on the page.

```jsx
const pets = [
  { name: 'Joey', type: 'Dog | Aussie', age: 8, image: 'img/aussie.jpg', alt: "Australian Shepard" },
  { name: 'Petey', type: 'Dog | Daschshund', age: 3, image: 'img/dachshund.jpg', alt: "Dachshund" },
  { name: 'Charlie', type: 'Dog | Golden Retriever', age: 12, image: 'img/golden.jpg', alt: "Golden Retriever" },
  { name: 'Alex', type: 'Cat | Persian', age: 11, image: 'img/persian.jpg', alt: "Persian Cat" },
  { name: 'Balls', type: 'Dog | Pug', age: 7, image: 'img/pug.jpg', alt: "Pug" },
  { name: 'Yellow', type: 'Cat | Tabby', age: 9, image: 'img/tabby.jpg', alt: "Tabby" }
]

const main = document.querySelector('main')

let html = ""
for (let i = 0; i < pets.length; i++) {
  html += `<h2>${pets[i].name}</h2><h3>${pets[i].type}</h3><p>Age ${pets[i].age}</p><img src="${pets[i].image}" alt="${pets[i].alt}">`
}

main.insertAdjacentHTML("beforeend", html)
```

See [insertAdjacentHTML()](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML)

![08-JS-Objects%20a14174646a6a4bcaa66e8f6ea8aaabcc/Screenshot_from_2020-10-13_22-49-36.png](08-JS-Objects%20a14174646a6a4bcaa66e8f6ea8aaabcc/Screenshot_from_2020-10-13_22-49-36.png)