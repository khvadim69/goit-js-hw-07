import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector(".gallery");
function createGalleryCardsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}" />
        </a>
    </div>
    `;
    })
    .join("");
}


const cardsMarkup = createGalleryCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);
galleryContainer.addEventListener("click", handleGaleryContainerClick);
function handleGaleryContainerClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  const modalImage = event.target.dataset.source;
  console.log(event.modalImage);

  const instance = basicLightbox.create(`
<img
src="${modalImage}"
width="800"
height="600" />
`);

  instance.show();
}


// function createGalleryCardsMarkup(array) {
//   return array.map(({ preview, original, description }) => {
//     const item = document.createElement("a");
//     item.href = original;
//     item.classList.add("gallery__item");
//     item.dataset.caption = description;
//     const image = document.createElement("img");
//     image.src = preview;
//     image.classList.add("gallery__image");
//     image.alt = description;
//     image.title = description;
//     image.delay = 250;
//     image.titlePosition = "top";
//     item.append(image);
//     return item;
//   });
// }
