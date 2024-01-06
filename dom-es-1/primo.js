// Stampa in ordine in console:

// l'elemento padre di ul.
// il secondo elemento figlio di ul.
// l'elemento fratello successivo del secondo li.
// l'elemento fratello precedente del secondo li.
// Il tutto utilizzando tutte e 4 le proprietà viste nel video.

const ul = document.querySelector("ul");

const ulParent = ul.parentElement.innerText;

console.log("elemento padre di ul", ulParent);

const ulChild = ul.children[1];

console.log("secondo elemento figlio di ul", ulChild);

const secondLi = ulChild.nextElementSibling.innerText;

console.log("elemento fratello successivo del secondo li", secondLi);

const anotherLi = ulChild.previousElementSibling.innerText;

console.log("elemento fratello precedente del secondo li", anotherLi);
