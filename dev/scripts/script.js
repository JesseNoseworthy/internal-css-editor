const renderStyles = function() {
  const snippet = document.getElementById('snippet');
  const render = document.getElementById('render');

  render.style = snippet.value;
  window.addEventListener('keyup', function() {
    render.style = snippet.value;
  });
}

renderStyles();