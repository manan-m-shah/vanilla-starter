import renderPage from './router.js';

const initializePage = (path, push=true) => {
  push && window.history.pushState({}, '', path);
  renderPage(path);
};

window.addEventListener('popstate', () => {
  renderPage(window.location.pathname);
});

export default initializePage;