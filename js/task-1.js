const categoriesList = document.getElementById('categories');

const categoryItems = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;

  const categoryElements = item.querySelectorAll('ul > li');

  console.log(`Categories: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements.length}`);
});
