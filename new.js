var items=document.getElementsByClassName('list-group-item');
console.log(items);
// console.log(items[1]);
// items[1].textContent='Hello';
items[2].style.fontWeight ='bold';
items[2].style.backgroundColor='green';
items[0].style.fontWeight ='bold';
items[1].style.fontWeight ='bold';
items[3].style.fontWeight ='bold';
var item = document.querySelector('.list-group-item');
item.style.color='pink';
var item = document.querySelector('.list-group-item');
item.style.color='pink';
var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color='blue';
var secondItem = document.querySelector('.list-group-item : nthchild(2)');
secondItem.style.color='red';
var titles = document.querySelectorAll('.title');

console.log(titles);
titles[0].textContent= 'ADD ITEM';

titles[0].style.fontWeight='bold';
titles[0].style.backgroundColor='green'