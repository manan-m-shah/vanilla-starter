import initializePage from '../initializePage.js';

const initializeAboutPage = () => {
  const homeButton = document.getElementsByClassName("homeButton")[0];

  homeButton &&
    homeButton.addEventListener("click", () => {
      initializePage('/');
    });
};

export default initializeAboutPage;
