import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const errorMessage =
  'Sorry, there are no images matching your search query. Please try again!';
const formElement = document.querySelector('#search-form');

formElement.addEventListener('submit', event => {
  event.preventDefault();
  const query = event.currentTarget.searchQuery.value;
  clearGallery();

  showLoader();

  getImagesByQuery(query)
    .then(data => {
      console.log('data', data.hits);

      if (data.hits.length === 0) {
        throw new Error(errorMessage);
      }
      createGallery(data.hits);
    })
    .catch(error => {
      console.error('Error in main.js:', error);
      iziToast.error({
        title: 'Error',
        message: errorMessage,
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
    });
});
