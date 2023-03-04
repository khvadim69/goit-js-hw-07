import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");
galleryContainer.setAttribute("uk-lightbox", "caption-position:bottom");
console.log(galleryContainer);
galleryContainer.addEventListener("click", handleGaleryContainerClick);

function createGalleryCardsMarkup(item) {
  return item
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}" data-caption = "${description}";
        >
        <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            title = ${description};
            delay = 250; 
            titlePosition = "top"/>
        </a>
    </div>
    `;
    })
    .join("");
}

const galleryElements = createGalleryCardsMarkup(galleryItems);
galleryContainer.append(...galleryElements);
function handleGaleryContainerClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  console.log(event.target);
  let href = event.target.closest("a").getAttribute("href");
  return href;
}
let gallery = new SimpleLightbox(".gallery a");
gallery.on("show.simplelightbox", function () {});
gallery.on("error.simplelightbox", function (event) {
  console.log(event);
});

console.log(createGalleryElement(galleryItems));
