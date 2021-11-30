export async function getProducts() {
  const url = 'data/products.json';

  const response = await fetch(url);
  const data = await response.json();

  return data;
}
