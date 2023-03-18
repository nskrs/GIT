var items=document.getElementsByClassName('list-group-item');
console.log(items);
// console.log(items[1]);
// items[1].textContent='Hello';
 items[1].style.fontWeight ='bold';
items[2].style.fontWeight ='bold';
// items[2].style.backgroundColor='green';
items[0].style.fontWeight ='bold';
// items[1].style.fontWeight ='bold';
items[3].style.fontWeight ='bold';
// var item = document.querySelector('.list-group-item');
// item.style.color='pink';
// var item = document.querySelector('.list-group-item');
// item.style.color='pink';
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color='blue';
// var secondItem = document.querySelector('.list-group-item : nthchild(2)');
// secondItem.style.color='yellow';
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent= 'ADD ITEM';

// titles[0].style.fontWeight='bold';
// titles[0].style.backgroundColor='green'

// // getElementsByClassName//
// var items = document.getElementsByClassName('.list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent='Hello';
// items[1].style.fontWeight='bold';
// items[1].style.backgroundColor='yellow';

// for(var i=0; i<items.length;i++){
//     items[i].style.backgroundColor='#f4f4f4';
// }
// //get elemtnsbytagname
// var li = document.getElementsByTagName('.li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent='Hello';
// li[1].style.fontWeight='bold';
// li[1].style.backgroundColor='invisible';

// for(var i=0; i<ili.length;i++){
//   li[i].style.backgroundColor='#f4f4f4';
// }
// querySelector
var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color='green';
// queryselectorAll//
var titles= document.querySelectorAll('.title');
console.log(titles);
var odd= document.querySelectorAll('li:nth-child(odd)');

for(var i=0; i<odd.length; i++){
    odd[i].style.backgroundColor='green';
}

