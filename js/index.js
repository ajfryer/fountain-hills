const animateFooter = () => {
  setTimeout(function () {
    console.log('timeout over');
    document.querySelector('footer').style = 'z-index: -999';
  }, 3000);
};

(() => {
  //animateFooter();
})();
