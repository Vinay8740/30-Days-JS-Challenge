//Task 1: Add a click event listener to a button that changes the text content of a paragraph.
let Ch_para = document.getElementById("Ref1")
let para = document.getElementById("Ref2")
Ch_para.addEventListener("click" , function(){
    para.textContent = "This is changed text"
})

//Task 2: Add a double click listener to an image that toggles its visibility.
let img = document.getElementById('Ref3')
img.addEventListener("dblclick",function(){
    if (img.style.display === 'none') {
        img.style.display = 'block'
    } else {
        img.style.display = 'none'
    }
})

//Task 3: Add a mouseover event listener to an element that resets its background color.
let bg = document.getElementById("Ref4")
bg.addEventListener("mouseover",function(){
    bg.style.backgroundColor = "lightgreen"
})

//Task 4: Add a mouseout event listener to an element that resets its background color.
bg.addEventListener("mouseout",function(){
    bg.style.backgroundColor = "lightblue"
})

//Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
let input = document.getElementById("Ref5")
input.addEventListener("keydown",function(event){
    console.log(`Key pressed: ${event.key}`);
})

//Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
let input1 = document.getElementById("Ref6")
let par1 = document.getElementById("Ref7")
input1.addEventListener("keyup",function(){
    par1.textContent = 'Current value: ' + input1.value
})

//Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
let form = document.getElementById('myForm')

form.addEventListener('submit', function(event) {
    event.preventDefault()
    
    let formData = new FormData(form)
    
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`)
    })
})

//Task 8: Add a change event listener to a select a dropdown that displays the selected value in a paragraph
let select = document.getElementById('mySelect')
 displayParagraph = document.getElementById('displayParagraph')

select.addEventListener('change', function() {
    displayParagraph.textContent = 'Selected value: ' + select.value
})

//Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
let list = document.getElementById("Ref8");

list.addEventListener("click", (e) => {
	if (e.target.tagName === "LI") {
		console.log(e.target.textContent);
	}
});

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
let parentList = document.getElementById("parentlist");
let addButton = document.getElementById("addToList");

addButton.addEventListener("click", (e) => {
  let newListItem = document.createElement("LI");
  newListItem.innerHTML = "List Item " + Number(parentlist.children.length + 1);
  parentlist.appendChild(newListItem);
});

parentlist.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(e.target.innerHTML);
  }
});

