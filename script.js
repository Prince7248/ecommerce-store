function searchProduct() {
  const input = document.getElementById('searchBar').value.toLowerCase();
  const products = document.getElementsByClassName('product-card');

  for (let i = 0; i < products.length; i++) {
    const text = products[i].innerText.toLowerCase();
    products[i].style.display = text.includes(input) ? "block" : "none";
  }
}
