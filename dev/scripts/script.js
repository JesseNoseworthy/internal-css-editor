const renderStyles = () => {
  const snippet = document.getElementById('snippet');
  const render = document.getElementById('render');
  render.style = snippet.value;
  
  window.addEventListener('keyup', () => {
    render.style = snippet.value;
  });
}

renderStyles();