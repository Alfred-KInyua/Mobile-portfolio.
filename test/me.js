const API_BASE_URL = 'https://api.frontendexpert.io/api/fe/testimonials';
const PAGE_SIZE = 5;
const testimonialcontainer = document.getElementById('testimonial-container');

// eslint-disable-next-line no-use-before-define
fetchAndAppendTestimonial();
async function fetchAndAppendTestimonial() {
  // eslint-disable-next-line no-use-before-define
  const url = editUrl();
  const response = await fetch(url);
  const { testimonials, hasNext } = await response.json();
  const fragment = document.createDocumentFragment();
  testimonials.forEach(({ message }) => {
    // eslint-disable-next-line no-use-before-define
    fragment.append(cretatetestielement(message));
    testimonialcontainer.append(fragment);
  });
}
function cretatetestielement(message) {
  const data = document.createElement('p');
  data.classList.add('testimonial');
  data.textContent = message;
  return data;
}
function editUrl() {
  const url = new URL(API_BASE_URL);
  url.searchParams.set('limit', PAGE_SIZE);
  return url;
}
