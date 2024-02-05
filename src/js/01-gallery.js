// Add imports above this line
import { galleryItems } from './gallery-items';
import simpleLightbox from 'simplelightbox';
// Change code below this line
// Descris în documentație
import SimpleLightbox from "simplelightbox";
// Import suplimentar de stil
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector('.gallery'); // Fix typo in the selector
const createGalleryItems = galleryItems
    .map(({ original, preview, description }) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" /> <!-- Fix missing double quote and closing tag for alt attribute -->
            </a>
        </li>`
    ).join("");

galleryContainer.innerHTML = createGalleryItems; // Fix typo in the variable name and use innerHTML to insert the generated HTML

const galleryHandler = new simpleLightbox(".gallery a", {cationData: "alt", captionDelay: 255});
galleryHandler.options("show.simplelightbox");