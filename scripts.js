// scripts.js

var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
	var element = document.getElementsByTagName('li').length;
	list.innerHTML += '<li>item  ' + element + '</li>';
});