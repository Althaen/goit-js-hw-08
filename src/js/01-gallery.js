import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryElement = document.querySelector(".gallery")
console.log(galleryItems);
console.log(galleryElement);

// 1. Получаем разметку галаереи и добавляем её в DOM
function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li>
        <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        </li>
      `;
    })
    .join(" ");
}

galleryElement.insertAdjacentHTML(
  "afterbegin",
  createGalleryMarkup(galleryItems)
);

// 2. Подключаем библиотеку на нашу галерею

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});