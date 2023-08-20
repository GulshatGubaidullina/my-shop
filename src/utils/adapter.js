export function adapter(product_from_server) {
  return {
    id: product_from_server.id,
    title: product_from_server.title,
    price: product_from_server.price,
    category: product_from_server.category,
    description: product_from_server.description,
    image: product_from_server.image,
    isFavorite: false,
    rating: {
      rate: product_from_server.rate,
      count: product_from_server.count,
    },
  };
}
