// importing bodies
import homeContent from '../html/pages/home/index.html';
import aboutContent from '../html/pages/about/index.html';

// importing scripts
import initializeHomePage from './pages/home.js';
import initializeAboutPage from './pages/about.js';

const renderHomePage = () => {
  document.title = 'Home';
  document.getElementById('app').innerHTML = homeContent;
  initializeHomePage();
};

const renderAboutPage = () => {
  document.title = 'About';
  document.getElementById('app').innerHTML = aboutContent;
  initializeAboutPage();
};

const renderNotFoundPage = () => {
  document.getElementById('app').innerHTML = '<h1>404 Not Found</h1>';
  document.title = '404 Not Found';
};

const renderPage = (path) => {
  switch (path) {
    case '/':
      renderHomePage();
      break;
    case '/about':
      renderAboutPage();
      break;
    default:
      renderNotFoundPage();
      break;
  }
};

export default renderPage;
