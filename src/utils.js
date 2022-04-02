export const fetchProducts = async () => {
  const response = await fetch("/api/products");
  const info = await response.json();
  return info;
};
