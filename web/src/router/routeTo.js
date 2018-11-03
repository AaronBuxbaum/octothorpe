import pages from './pages';

const routeTo = (pageName) => {
  const page = pages[pageName] || pages['HOME'];
  window.location.assign(page);
};

export default routeTo;
