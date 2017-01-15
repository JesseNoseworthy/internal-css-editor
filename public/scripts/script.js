'use strict';

var renderStyles = function renderStyles() {
  var snippet = document.getElementById('snippet');
  var render = document.getElementById('render');
  render.style = snippet.value;

  window.addEventListener('keyup', function () {
    render.style = snippet.value;
  });
};

renderStyles();