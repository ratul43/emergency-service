1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

-> getElementById() only catches the targeted id of a element. 
Example: If we create a <h1> tag and set id like <h1 id="myText"> Hello </h1> . When we write getElementById("myText") it will select this element.

-> getElementByClassName() catches all the elements matching with the same class name.
If we set 
<h1 class= "myWrite"> Hi <h1>
<h1 class= "myWrite"> Hi <h1>
It will catch these 2 elements

-> querySelector() only select the first element that matches a specified CSS selector. We can select elements by tag, class, id with this method. Example:

document.querySelector("p")


-> querySelectorAll() method is a JavaScript function used to select all elements within a document match a specified CSS selector. We can select all elements by tag, class, multiple selectors. Example:
To select all div and p elements:
document.querySelectorALl("div, p")



2. How do you **create and insert a new element into the DOM**?


-> To create and insert a new element into the DOM, the following steps should be done:

1. Create the new element: 
Use document.createElement() . This method takes the tag name that I wanna create like ('div', 'p', 'span')

let newElement = document.createElement('div')

2. Add content and attributes
Set the textContent, innerHTML to add text or whole HTML content

newElement.innerHTML = `
<div>
Hello, I am modified div
 </div>
`

3. Select a parent of reference element:
Identify where I wanna insert the new element within the existing DOM structure. We can use document.getElementByID(),
document.querySelector() or document.getElementsByTagName() etc.

let parentElement = document.getElementById('container')

4. Insert the new element:
appendChild(): If I wanna add the new element as the last child of a parent element

parentElement.appendChild(newElement)



3. What is **Event Bubbling** and how does it work?

-> Event Bubbling is a JavaScript mechanism in which a DOM event, such as click, first triggers on the intermost element that received it and then propagates or "bubbles" up the DOM tree to it's ancestors, including parents and root document element.

How Event Bubbling Works:
1. Event target:
When an event occurs e.g. click, the event is first directed to the specific element that was clicked

2. Bubbling up the tree:
The event then go to upper direction to it's parent, then to it's grandparent and up to the DOM hierarchy

3. Triggering handlers:
Event handlers attached to these ancestors elements are triggered in sequence as the event bubbles up

4. Reaching the root:
The process continues until the event reaches the topmost element of the DOM




4. What is **Event Delegation** in JavaScript? Why is it useful?

Event delegation in JavaScript is a technique for handling events on multiple child elements by attaching a single event listener to their common parent element.


Usefulness of Event Delegation:
1. Improved performance: Reduces the number of event listeners to the DOM, especially beneficial list with many items, DOM with many buttons leading to less memory consumption and faster rendering.

2. Dynamic Elements:
Easily handles events on elements that are added to the DOM dynamically after the initial page load

3. Cleaner Code:
Leads to more concise and organized code by centralizing event handling logic.



5. What is the difference between **preventDefault() and stopPropagation()** methods?

-> preventDefault() prevents the browser's default action of an element event. For example, form element event reload pages after submission but preventDefault() pause it.

-> stopPropagation() stops the event propagating up or down in the target element during event flow.
When stopPropagation() is called, the event will not trigger event listener on parent or ancestor elements (in the bubbling phase) or child/descendants elements (in the capturing phase).
For example, if there was 2 event listener with different ids if event.stopPropagation() apply to the second id it will stop bubbling.