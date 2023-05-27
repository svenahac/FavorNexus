async function getFavors() {
  const response = await fetch("/api/favors");
  const favors = await response.json();
  return favors;
}

export { getFavors };
