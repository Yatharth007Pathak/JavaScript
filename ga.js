// setAttribute

let para = document.querySelector("p");
console.log(para.setAttribute("class", "newPara"));

let div =document.querySelector("div")
console.log(div.setAttribute("id", "newBox"));

/*
Line-by-Line Breakdown of Code:

1. let para = document.querySelector("p");
Uses document.querySelector() to select the first <p> element in the HTML document.
Stores the reference to this <p> element in the variable para.

2. console.log(para.setAttribute("class", "newPara"));
Calls the setAttribute() method on the para element.
Adds a class attribute to the <p> element and sets its value to "newPara".
Logs the return value of setAttribute() to the console.
Note: The setAttribute() method does not return a value (undefined), so the console will log undefined.

3. let div = document.querySelector("div");
Uses document.querySelector() to select the first <div> element in the HTML document.
Stores the reference to this <div> element in the variable div.

4. console.log(div.setAttribute("id", "newBox"));
Calls the setAttribute() method on the div element.
Adds an id attribute to the <div> element and sets its value to "newBox".
Logs the return value of setAttribute() to the console.
Similar to the previous setAttribute() call, this will log undefined.

The undefined output occurs because the setAttribute() method does not return any value. Instead, it modifies the DOM directly.

Explanation of Functionality:
setAttribute(attributeName, value): Adds a new attribute to the selected element or updates the value of an existing attribute.
After execution:
The <p> element will now have the class="newPara" attribute.
The <div> element will now have the id="newBox" attribute.
*/