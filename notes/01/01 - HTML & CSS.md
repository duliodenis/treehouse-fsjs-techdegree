# 01 - HTML & CSS

**Oct 01, 2020**

**CSS Rules**

**Selector** = tag or element / class names

**style instructions** composed of **CSS properties**

**Classes** are attributes you can add to CSS elements and then target them in a rule.

![01%20-%20HTML%20&%20CSS%20a697737a158f406e8015837891a6827e/Untitled.png](01%20-%20HTML%20&%20CSS%20a697737a158f406e8015837891a6827e/Untitled.png)

class attributes use a dot in the selector name

![01%20-%20HTML%20&%20CSS%20a697737a158f406e8015837891a6827e/Untitled%201.png](01%20-%20HTML%20&%20CSS%20a697737a158f406e8015837891a6827e/Untitled%201.png)

References:

[https://css-tricks.com/almanac/](https://css-tricks.com/almanac/)

[CSS reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

**Classing with Classes**

Styling by class is reusable

![01%20-%20HTML%20&%20CSS%20a697737a158f406e8015837891a6827e/Screenshot_from_2020-10-02_22-39-17.png](01%20-%20HTML%20&%20CSS%20a697737a158f406e8015837891a6827e/Screenshot_from_2020-10-02_22-39-17.png)

here we apply the same class to a different h2 without having to write any new CSS.

you can now add this class to any element or tag like a p2.

**Padding vs Margin**

Padding = the space between the element and its border (**INSIDE**)

Margin = the space between the element border and the outside (**OUTSIDE**)

![01%20-%20HTML%20&%20CSS%20a697737a158f406e8015837891a6827e/Screenshot_from_2020-10-02_22-42-06.png](01%20-%20HTML%20&%20CSS%20a697737a158f406e8015837891a6827e/Screenshot_from_2020-10-02_22-42-06.png)

**An HTML Document:** resume.html

<!DOCTYPE html>

<html>

<head>

<title>My Resume</title>

<link rel="stylesheet" href="resume.css">

</head>

<body>

<h1>Resume</h1>

<img src="[https://placeimg.com/200/200/tech](https://placeimg.com/200/200/tech)" alt="Me, Web Developer" class="main-image">

<h1>Me, Web Developer</h1>

<h2 class="section-title">Summary of Qualifications</h2>

<ul>

<li>Experience as a freelance web developer</li>

<li>Experience with HTML, CSS, and JS</li>

<li>Bachelor of Science, Computer Science</li>

</ul>

<h2 class="section-title">Education</h2>

<h2 class="section-title">Employment</h2>

</body>

<html>

**A CSS File:** resume.css

body {

font-family: "Arial";

}

.main-image {

border: solid 4px black;

border-radius: 50%;

}

h1 {

background-color: #e2e2e2;

padding: 5px;

}

.section-title {

text-transform: uppercase;

}

![01%20-%20HTML%20&%20CSS%20a697737a158f406e8015837891a6827e/Screenshot_from_2020-10-03_15-38-09.png](01%20-%20HTML%20&%20CSS%20a697737a158f406e8015837891a6827e/Screenshot_from_2020-10-03_15-38-09.png)