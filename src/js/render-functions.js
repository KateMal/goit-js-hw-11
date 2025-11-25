// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

// Create a single gallery instance
const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});

// Render gallery cards from image objects
export function renderGalleryMarkup(images) {
  const galleryEl = document.querySelector('.gallery');

  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
        <li class="gallery-item">
          <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" loading="lazy" />
          </a>
          <div class="info">
            <p><strong>Likes:</strong> ${likes}</p>
            <p><strong>Views:</strong> ${views}</p>
            <p><strong>Comments:</strong> ${comments}</p>
            <p><strong>Downloads:</strong> ${downloads}</p>
          </div>
        </li>
      `;
      }
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);

  // Refresh gallery to recognize new elements
  gallery.refresh();
}
