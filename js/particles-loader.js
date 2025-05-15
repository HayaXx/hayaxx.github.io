// particles-loader.js
fetch('js/particles.json')
  .then(response => response.json())
  .then(config => {
    particlesJS('particles-js', config);
  });