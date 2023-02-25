var items=document.getElementsByClassName('list-group-item');
console.log(items);

items[1].style.fontWeight ='bold';
items[2].style.fontWeight ='bold';
// items[2].style.backgroundColor='green';
items[0].style.fontWeight ='bold';
// items[1].style.fontWeight ='bold';
items[3].style.fontWeight ='bold';

// trnversing the DOM//
var itemList =document.querySelector('#items');

// parentNode//
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor='#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);
// parentElement//
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='pink';
console.log(itemList.parentElement.parentElement.parentElement);

// firstChild//
console.log(itemList.firstChild);

// firstElement//
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='Hello 1';

// lastChild//
console.log(itemList.lastChild);

// lastElement//
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='Hello 4';

// nextSibling//
console.log(itemList.nextSibling);
// nextsiblingElement
console.log(itemList.nextElementSibling);
// itemList.nextElementSibling.style.fontWeight ='bold';
// previoussibiling
console.log(itemList.previousSibling);
// previousElementSibling//
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='red';

// create a div//
var newDiv = document.createElement('div');
// Add class
newDiv.ClassName='HEllo';
// add id
newDiv.id= 'hello1';
// add attr
newDiv.setAttribute('title','Hello Div');

// creat text Node
var newDivText = document.createTextNode('HEllo');
// Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1= document.querySelector('header h1');

console.log(newDiv);
newDiv.style.fontSize='40px';

container.insertBefore(newDiv,h1);


