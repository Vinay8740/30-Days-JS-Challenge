// Task 1: selection an html element by its id and change its text content.
let p = document.getElementById('Ref1');
p.textContent = "30-Days-JS-Challenge";

// Task 2: select an html element by its class and change its background color.
let bgcolour = document.getElementsByClassName("Refc2");

for(let i=0; i<bgcolour.length; i++){
    bgcolour[i].style.backgroundColor = "red"  
}

// Task 3:create a new div element with some text content and append it to body.
let newDiv = document.createElement("div");
newDiv.textContent = "30-Days-JS-Challenge";
document.body.appendChild(newDiv);

//Task 4: Create a new li element and add it to an exisiting ul list.
var newLi = document.createElement('li')
newLi.textContent = 'New Item'
var ulid = document.getElementById("Ref2")
ulid.appendChild(newLi)

//Task 5: Select an HTML element and remove it from the DOM.
let removeele = document.getElementById("Ref4")
removeele.remove()

//Task 6: Remove the last child of a specific HTML element.
let parentitem = document.getElementById('Ref2')
if(parentitem.lastElementChild){
    parentitem.removeChild(parentitem.lastElementChild)
}

//Task 7: Select an HTML elements and change one of its attributes(e.g, src of an img tag)
let Img = document.getElementById("Ref3")
Img.setAttribute('src','new_image.jpeg')

//Task 8: Add and remove a CSS class to/from an HTML element.
var paragraph = document.getElementById('Ref5')
function myFunction() {
    var element = document.getElementById("Ref5");
    element.classList.add("Refc3");
 }
 function remFunction() {
    var element = document.getElementById("Ref5");
    element.classList.remove("Refc3");
 }

 //Task 9: Add a click event listener to a button that changes the text content of a paragraph.
 let but = document.getElementById("Ref6")
 let para = document.getElementById("Ref7")
 but.addEventListener('click' , function(){
    para.textContent = "text changed";
 })

 //Task 10: Add a mouseover event listener to an element that changes its border color.
 let hover = document.getElementById("Ref8")
 hover.addEventListener('mouseover', function(){
    hover.style.backgroundColor = 'lightgreen';
 })

 hover.addEventListener('mouseout', function() {
    hover.style.backgroundColor = 'gray'
})
