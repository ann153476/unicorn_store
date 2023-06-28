function createImagePaths() {
  let imagePaths = [];

  for (let i = 1; i <= 86; i++) {
    imagePaths.push(`../img/unicorn (${i}).png`);
  }

  return imagePaths;
}

export default createImagePaths();
