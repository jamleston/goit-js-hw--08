import { galleryItems } from './gallery-items.js';
// Change code below this line

// refs and const
const refs = {
    galleryListRef: document.querySelector('.gallery')
}

const itemsMarkup = createArrayOfItems(galleryItems);

// events

refs.galleryListRef.insertAdjacentHTML("afterbegin", itemsMarkup);

// functions

function createArrayOfItems (array) {
    return array.map(elem =>{
        return `<li class="gallery__item">
        <a class="gallery__link" href=${elem.original}>
           <img class="gallery__image" 
           src=${elem.preview}
           alt=${elem.description} />
        </a>
     </li>`
    }).join('');
};

const lightbox = new SimpleLightbox('.gallery .gallery__link',
    {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    }
);

console.log(lightbox);