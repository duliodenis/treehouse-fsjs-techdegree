# 09-CSS-Basics

CSS (Cascading Style Sheets) is a style sheet language that describes the presentation of web pages. Whereas HTML forms the structure of a web page, CSS is what developers use to style HTML with colors, backgrounds, font sizes, layout, and more. As you'll learn, CSS is one of the core technologies for designing and building websites.

## **What you'll learn**

- Basic Selectors
- Common Values and Units
- CSS Layout
- New CSS Features

## Getting Started with CSS

Get started with one of the core technologies for designing and building websites and applications. In this stage, you'll learn about the evolution of CSS, helpful resources, and how to add CSS to a page.

## CSS Basics Overview

In this course, we're going to learn the core concepts of CSS while styling the structure of a simple website for the city of Lake Tahoe, CA. We’ll start with basic concepts, then gradually progress to more advanced topics and lessons.

![09-CSS-Basics%20852ee481124b4315bfec13a5fb61ee6a/Screenshot_from_2020-10-14_22-47-48.png](09-CSS-Basics%20852ee481124b4315bfec13a5fb61ee6a/Screenshot_from_2020-10-14_22-47-48.png)

Whereas HTML provides the structural foundation of a webpage CSS is a stylesheet language that describes the presentation of web pages.

![09-CSS-Basics%20852ee481124b4315bfec13a5fb61ee6a/Screenshot_from_2020-10-14_22-50-22.png](09-CSS-Basics%20852ee481124b4315bfec13a5fb61ee6a/Screenshot_from_2020-10-14_22-50-22.png)

A web page is composed of three layers that work together to deliver an experience to the user.

![09-CSS-Basics%20852ee481124b4315bfec13a5fb61ee6a/Screenshot_from_2020-10-14_22-52-38.png](09-CSS-Basics%20852ee481124b4315bfec13a5fb61ee6a/Screenshot_from_2020-10-14_22-52-38.png)

HTML = the content layer

JS = the behavioral layer

CSS = the presentation layer 

Before CSS was introduced - presentational tags (mostly proprietary) were embedded in the HTML to control the design of a web page.

**HTML4** introduced CSS to separate content and presentation.

CSS3, the latest evolution of CSS, has introduced in-browser design tools close to what you'd see in a graphics editor like Photoshop with rounded corners, box shadows, animations, gradients, and new layout features like Flexbox.

## CSS Resources

With all the new CSS features, selectors, properties and values available, how do we stay current? Here are helpful resources for learning and staying up-to-date with CSS.

- **[Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS)**
- **[WebPlatform.org](https://www.webplatform.org/docs/css/)**
- **[W3C](http://www.w3.org/Style/CSS/Overview.en.html)**
- **[Can I Use](http://caniuse.com/)**

## Inline and Internal Styles

There are different ways we can add CSS to a page. First, let’s go over the inline and internal style methods.

### **Inline Styles**

When we write inline styles, we write the CSS in the HTML file, directly inside an element's tag using a style attribute.

```css
<body style="background-color: orange;">
```

### **Internal Styles**

Internal styles are embedded in the **`<head>`** section of the HTML document and are defined inside a **`<style>`** tag.

```css
<style>
  p {
    font-size: 20px;
    font-weight: bold;
  }
</style>
```