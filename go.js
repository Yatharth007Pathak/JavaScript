// Function to add a new element using append() inside parentDiv
function addElementAppend() {
    let newElement = document.createElement("p");
    newElement.textContent = "This paragraph was added using append()!";
    let parentDiv = document.getElementById("parentDiv");
    parentDiv.append(newElement);  // Adds as the last child of parentDiv
    console.log("Element added using append()");
  }
  
  // Function to add a new element using prepend() inside parentDiv
  function addElementPrepend() {
    let newElement = document.createElement("p");
    newElement.textContent = "This paragraph was added using prepend()!";
    let parentDiv = document.getElementById("parentDiv");
    parentDiv.prepend(newElement);  // Adds as the first child of parentDiv
    console.log("Element added using prepend()");
  }
  
  // Function to add a new element using before() before extraDiv
  function addElementBefore() {
    let newElement = document.createElement("p");
    newElement.textContent = "This paragraph was added using before()!";
    let extraDiv = document.getElementById("extraDiv");
    extraDiv.before(newElement);  // Adds before the extraDiv
    console.log("Element added using before()");
  }
  
  // Function to add a new element using after() after extraDiv
  function addElementAfter() {
    let newElement = document.createElement("p");
    newElement.textContent = "This paragraph was added using after()!";
    let extraDiv = document.getElementById("extraDiv");
    extraDiv.after(newElement);  // Adds after the extraDiv
    console.log("Element added using after()");
  }
  
  // Function to remove the last child element of parentDiv
  function removeElement() {
    let parentDiv = document.getElementById("parentDiv");
  
    // Check if the parent div has any child elements to remove
    if (parentDiv.lastElementChild) {
      parentDiv.lastElementChild.remove();  // Removes the last child of parentDiv
      console.log("Last element removed from parentDiv.");
    } else {
      console.log("No elements to remove.");
    }
  }
  