const books = document.querySelectorAll('.book'),
  booksUl = document.querySelectorAll('ul'),
  elems = document.getElementsByTagName('li');
console.log('elems: ', elems);
console.log('booksUl: ', booksUl);
console.log(books);
//Восстановить порядок книг.
books[0].before(books[1]);
books[2].remove();
books[3].before(books[4]);
books[5].before(books[2]);
books[5].after(books[2]);

//Заменить картинку заднего фона на другую из папки image
document.body.style.backgroundImage = 'url(image/you-dont-know-js.jpg)';

//Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
const edit = document.getElementsByTagName('a');
edit[2].textContent = 'Книга 3. this и Прототипы Объектов';

//Удалить рекламу со страницы
const header = document.querySelector('.adv');
header.remove('adv');

//Восстановить порядок глав во второй и пятой книге 
//elems[8].remove();
books[0].append(elems[8]);
books[0].append(elems[15]);
elems[12].before(elems[13]);
elems[10, 9].before(elems[12, 11]);
elems[11].before(elems[12]);
elems[10].before(elems[11]);
booksUl[5].prepend(elems[45]);
elems[36].before(elems[37]);
elems[37].before(elems[38]);
elems[39].before(elems[40]);
elems[40].before(elems[41]);
elems[42].before(elems[43]);
elems[43].before(elems[44]);

//в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
const newElem = document.createElement('li');
books[2].append(newElem);
elems[57].innerHTML = 'Глава 8: За пределами ES6';
elems[56].before(elems[57]);