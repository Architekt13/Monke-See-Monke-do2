// src/scrollbarBehavior.js

document.addEventListener('scroll', function() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || window.innerHeight;
    const scrollBottom = scrollHeight - clientHeight - scrollTop;
    const rootElement = document.documentElement;
  
    if (scrollTop === 0) {
      // At the top
      rootElement.classList.add('scroll-top');
      rootElement.classList.remove('scroll-bottom');
    } else if (scrollBottom <= 1) {
      // At the bottom
      rootElement.classList.add('scroll-bottom');
      rootElement.classList.remove('scroll-top');
    } else {
      // In the middle
      rootElement.classList.remove('scroll-top', 'scroll-bottom');
    }
  });
  