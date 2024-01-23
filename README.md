# FrontEnd Mentor | Rating Component

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot
![Screenshot 2024-01-23 at 11-33-34 Frontend Mentor Interactive rating component](https://github.com/Itsrenata2/FrontEnd-Mentor---Rating-Component/assets/99251703/7123dc03-e667-46ce-9839-0ad5b22bc942)
![Screenshot 2024-01-23 at 11-33-44 Frontend Mentor Interactive rating component](https://github.com/Itsrenata2/FrontEnd-Mentor---Rating-Component/assets/99251703/3a5b343b-b89b-4aa1-9abd-814e5ff149fb)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind CSS - CSS Framework
- Javascript - DOM Manipulation

### What I learned

In this challenge I learned how to use the CSS framework Tailwind with the utility classes and also how to get elements from the page with the DOM to use in the js file.

Some of the code snippets:

```css
<div class="thank-you-card hidden bg-blue-dark w-11/12 md:w-2/6 p-8 rounded-3xl mx-auto my-28 text-center">
  <img src="images/illustration-thank-you.svg" alt="thank you illustration" class="mx-auto mb-8">
  <div class="bg-grey-medium rounded-full p-2 w-1/2 m-auto mb-8"><p class="text-orange">You selected <span>1</span> of 5</p></div>
}
```
```js
const ratingBtns = document.querySelectorAll(".btn");
const submitBtn = document.querySelector(".submit-btn");
```

### Continued development

In future projects I will keep learning about DOM Manipulation and the implemetation of Tailwind in the HTML.

### Useful resources

- [Tailwind CSS](https://tailwindcss.com/) - The Tailwind website has all the things you need to know to implement the framework in your projects.

## Author

- LinkedIn - [Renata Silva](www.linkedin.com/in/renata-silva22)
- Frontend Mentor - [@Itsrenata2](https://www.frontendmentor.io/profile/Itsrenata2)
