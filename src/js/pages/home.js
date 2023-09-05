import initializePage from '../initializePage.js';

const initializeHomePage = () => {
  const aboutButton = document.getElementsByClassName("aboutButton")[0];

  aboutButton &&
    aboutButton.addEventListener("click", () => {
      initializePage('/about');
    });
};

export default initializeHomePage;
