javascript:(function() {
  const currentURL = window.location.href;
  const parsedURL = new URL(currentURL);
  let path = parsedURL.pathname;
  
  if (!path.startsWith('/')) {
    path = '/' + path;
  }
  
  const newURL = `https://vscode.dev/github${path}`;
  window.open(newURL, '_blank');
})();
