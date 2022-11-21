# Project | Landing Page  #

This is a Project for creating a landing page template.

## Table of contents

- [Links]
- [Overview.]
- [The Template]
- [Built with]
- [Syntax Guide]
- [Useful resources]
- [Coded By]

### Links
- Live Site URL:(https://anansoli.github.io/Landing-Page-and-Manipulating-the-DOM/)

## Overview

### The Template

Users should be able to:
- View the optimal layout depending on their device's screen size.
- See hover and scroll states for interactive elements.
- See the selected Sections highlighted.
- scroll among Sections smoothly.


### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- CSS Flex
- JavaScript ES6
- font style (https://fonts.googleapis.com/css?family=Fira+Sans:900|Merriweather&display=swap) 


### Syntax Guide

- main Heading => used (h1) tag.
- sections Heading => used (h2) tag.
- to create the Navigation bar => created (nav) Tag and added to it unordered list (ul)

- the (ul) will be dynamically updated using JavaScript DOM, according to the sections availble in the page, by adding the list item tag (li) and inside of it adding , anchor (a) elements with (href) attribute values of each section ID , to jump to each section.

- using Javascript i used Looping over the sections count so i can create equal number of (li) and (a) no matter how many sections were added.

- to highlight or add the active class to the section in view i used (.onscroll) method to calculate each section scrolling  position. 
    by using .offsetTop()   => for getting the section Top position and  
     .offsetHeight() => for getting th section height.

- I added a Top butten in the navigation bar usig Javascript to allow users to get back to the top of the page from any section.
    
    using => insertAdjacentHTML() method that allows you to add elements by chosing their postion and context.

- to navigate smothly to each section = > 
    i used the .addEventListner() method with the (click) argument to create an event whenever the element was clicked , using also .scrollIntoView() method to control the scrolling flow . 
    
    *note* => you have to use element.preventDefault() to cancel the default function of jumping to sections to be able to create a new one that scrolls smoothly.

- Footer => 
   created a footer using (footer) Tag

### Useful resources 
-(https://www.youtube.com/)   
-(https://www.w3schools.com/)   
-(https://developer.mozilla.org/en-US/)   

## Coded By
- Anan Ahmed 
