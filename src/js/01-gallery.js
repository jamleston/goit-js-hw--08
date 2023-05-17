// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

// refs and const
const refs = {
    galleryListRef: document.querySelector('.gallery')
}

const itemsMarkup = createArrayOfItems(galleryItems);

// events

refs.galleryListRef.insertAdjacentHTML("afterbegin", itemsMarkup);
refs.galleryListRef.addEventListener('click', onOpenModal);

// functions

function createArrayOfItems (array) {
    return array.map(elem =>{
        return `<li class="gallery__item">
        <a class="gallery__link" href=${elem.original}>
        <img
            class="gallery__image"
            src=${elem.preview}
            data-source=${elem.original}
            alt=${elem.description}
        />
        </a>
        </li>`
    }).join('');
};

function onOpenModal (event) {
    event.preventDefault();
    const currentItem = event.target;

    if(currentItem.nodeName !=='IMG') {
        return
    }

    const instance = basicLightbox.create(`
    <img class='gallery__image' src='${currentItem.parentNode.href}' width="800" height="600"/>`);

    instance.show();
    console.log(instance);
}