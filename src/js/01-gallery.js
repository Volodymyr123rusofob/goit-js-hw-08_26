// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const listUlGallery = document.querySelector('.gallery');

const elementListGalleryLi = galleryItems
  .map(
    element => `<li class="gallery__item">
    <a
        class="gallery__link"
        href="${element.original}"
    >
        <img
            class="gallery__image"
            src="${element.preview}"
            alt="${element.description}"
            title="${element.description}"
        />
    </a>
</li>`
  )
  .join('');

listUlGallery.insertAdjacentHTML('afterbegin', elementListGalleryLi);

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
