// dom Selection 
// document.getElementByTagName()
const p = document.getElementsByTagName('p');
p[0].style.backgroundColor = 'red'
p[1].style.backgroundColor = 'yellow'
p[2].style.backgroundColor = 'green'
p[3].style.backgroundColor = 'blue'
p[4].style.backgroundColor = 'pink'


// document.getElementByClassName()
const cardtitle = document.getElementsByClassName('card-title')
cardtitle[0].innerHTML = 'Dom manipulati0ns';


// document.createElement()
// buat elemen baru 
const libaru = document.createElement ('li');
const tekslibaru = document.createTextNode('item baru penambahan Dom');

// // simpan tulisan ke dalam paragraf baru
libaru.appendChild(tekslibaru);
const ul = document.querySelector('section#b ul');
const  li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(libaru,li2);

 