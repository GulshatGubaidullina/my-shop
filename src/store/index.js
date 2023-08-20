import { defineStore } from "pinia";
import { adapter } from "../utils/adapter";
import { addItemLS, getItemFromLS } from "../utils/localStorage";

const url = "https://fakestoreapi.com";

const Keys = {
  myShopProducts: "my-shop-products",
  myShopCategories: "my-shop-categories",
  myShopCurrentProduct: "my-shop-current-product",
  myShopBasket: "my-shop-basket",
};

export const useProductsStore = defineStore("productsStore", {
  state: () => ({
    products: [],
    currentProduct: {},
    basket: [],
    categories: [],
    selectedCategory: "All",
    isError: false,
  }),
  getters: {
    getFavoritesProducts: (state) => {
      return state.products.filter((product) => product.isFavorite);
    },
    getBasketTotalPrice: (state) => {
      return state.basket.reduce((sum, item) => sum + item.price, 0);
    },
    getBasketLength: (state) => {
      return state.basket.length;
    },
    getSortedProducts: (state) => {
      if (state.selectedCategory === "All") return state.products;
      else
        return state.products.filter(
          (product) => product.category === state.selectedCategory
        );
    },
  },
  actions: {
    async getProducts() {
      const productFromLS = getItemFromLS(Keys.myShopProducts);
      if (productFromLS) {
        this.products = productFromLS;
      } else {
        try {
          fetch(url + "/products")
            .then((res) => res.json())
            .then((response) => {
              response.forEach((item, index) => {
                response[index] = adapter(item);
              });
              this.products = response;
              this.setDataLocalStorage(Keys.myShopProducts, this.products);
            });
        } catch {
          this.isError = true;
        }
      }
    },
    async getCategoriesFromServer() {
      const categoriesFromLS = getItemFromLS(Keys.myShopCategories);
      if (categoriesFromLS) {
        this.categories = categoriesFromLS;
      } else {
        fetch(url + "/products/categories")
          .then((res) => res.json())
          .then((json) => {
            this.categories = json;
            this.categories.unshift("All");
            this.setDataLocalStorage(Keys.myShopCategories, this.categories);
          });
      }
    },
    changeProductFavorite(id) {
      this.basket.forEach((product) => {
        if (product.id === id) {
          product.isFavorite = !product.isFavorite;
        }
      });
      this.setDataLocalStorage(Keys.myShopBasket, this.basket);

      this.products.forEach((product) => {
        if (product.id === id) {
          product.isFavorite = !product.isFavorite;
        }
      });
      this.setDataLocalStorage(Keys.myShopProducts, this.products);
    },
    setDataLocalStorage(storageName, data) {
      addItemLS(storageName, data);
    },
    getProductById(id) {
      const product = this.products.find((product) => product.id === id);
      if (product) {
        this.currentProduct = product;
      } else this.isError = true;
    },
    addProductInBasket(product) {
      const itemExists = this.basket.some((item) => item.id === product.id);
      if (!itemExists) {
        this.basket.push(product);
        this.setDataLocalStorage(Keys.myShopBasket, this.basket);
      }
    },
    getBasket() {
      const basket = getItemFromLS(Keys.myShopBasket);
      if (basket) {
        this.basket = basket;
      }
    },
    deleteProductFromBasket(id) {
      this.basket = this.basket.filter((item) => item.id !== id);
    },
    isProductInBasket(id) {
      return this.basket.some((item) => item.id === id);
    },
    changeSelectedCategory(category) {
      this.selectedCategory = category;
    },
  },
});
