// node.appendChild


const div = document.createElement('div');
const textNode = document.createTextNode('Hello, World!');
div.appendChild(textNode);
document.body.appendChild(div); // Adds the div with text to the body

/*
Line-by-Line Breakdown of the Code

1. const div = document.createElement('div');
Creates a new <div> element using document.createElement().
This element is stored in the variable div but is not yet added to the document.

2. const textNode = document.createTextNode('Hello, World!');
Creates a new text node with the content "Hello, World!" using document.createTextNode().
This text node is stored in the variable textNode and will serve as the content for the <div>.

3. div.appendChild(textNode);
Appends the textNode as a child of the div element.
The <div> now contains the text "Hello, World!".

4. document.body.appendChild(div);
Appends the newly created <div> (with its child text node) to the <body> of the document.
This effectively adds the <div> with the text "Hello, World!" to the webpage.

How It Works:
A <div> element is created.
A text node containing "Hello, World!" is created.
The text node is added inside the <div> element using appendChild().
The <div> is added to the <body> of the document, making it visible on the webpage.
*/