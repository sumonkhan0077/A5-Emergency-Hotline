### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

## Answer 

- 1. getElementById -is select a single element by id. getElementsByClassName - it brings all the classes with the same name. querySelector - When used, it gives the first matching element. It works directly like a CSS class or id. querySelectorAll - This will apply to all elements with the same name. It can also be written like CSS class and id.
- 2.Create a new element by typing document.createElement.Then give .innerText to write something and .innerhtml to add HTML file Find the parent element where I want to place it. Then insert that text or html into that parent with .appendChild().
- 3. Event Bubbling is when an event occurs on a child element (such as a click), that event is first triggered on the child element → then gradually moves up to the parent element, grandparent element, and so on up to the document. Bubble Flow sequence { button → div → div → body → html → document }  continues like this 
- 4. Event delegation is a JavaScript technique where instead of having an event listener on each child element, we attach an event listener to their parent element. Then, by taking advantage of event bubbling, we can detect and handle events triggered by any child element inside the parent.Less code is needed, because there is no need to add a new event listener for each child. As a result, the performance becomes much better and the website runs faster. And if a new child has to be added later, it will also work through the parent’s event listener. 
- 5. **preventDefault()** If the form is submitted inside the **form** tag then the page will auto reload. If we use preventDefault() then the page will not reload.

- **stopPropagation()** When an event occurs on an element on a web page, that event typically flows up through the DOM hierarchy to parent elements. This is called event bubbling. The stopPropagation() method stops this bubbling process.
- preventDefault() is used to prevent the default behavior of an event. stopPropagation() is used to prevent bubbling of an event.

