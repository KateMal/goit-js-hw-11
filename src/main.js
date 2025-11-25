import { getImagesByQuery } from './js/pixabay-api';
import { renderGalleryMarkup } from './js/render-functions';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

let hits = [];
const errorMessage =
  'Sorry, there are no images matching your search query. Please try again!';
const formElement = document.querySelector('#search-form');

formElement.addEventListener('submit', event => {
  event.preventDefault();
  const query = event.currentTarget.searchQuery.value;
  hits = [];
  document.querySelector('.gallery').innerHTML = '';
  getImagesByQuery(query)
    .then(data => {
      console.log('data', data.hits);

      if (data.hits.length === 0) {
        throw new Error(errorMessage);
      }
      hits = data.hits;
      renderGalleryMarkup(hits);
    })
    .catch(error => {
      console.error('Error in main.js:', error);
      iziToast.error({
        title: 'Error',
        message: errorMessage,
        position: 'topRight',
      });
    });
  // const formData = new FormData(event.currentTarget);
  // console.log('formData', formData);
  // const query = formData.get('searchQuery');
  // console.log('query', query);
  // getImagesByQuery(query);
});
