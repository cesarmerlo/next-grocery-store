import { atom, selector } from "recoil";
import { fetcher } from "../helpers";

//ATOMS
export const selectedCategory = atom({
  key: "selectedCategory",
  default: "all",
});

export const orderOptions = atom({
  key: "orderOptions",
  default: ["Ascending", "Descending", "Min Price", "Max Price"],
});

export const sortMode = atom({
  key: "sortMode",
  default: "Ascending",
});

export const searchValue = atom({
  key: "searchValue",
  default: "",
});

export const cart = atom({
  key: "cart",
  default: {},
});

export const cartLength = atom({
  key: "cartLength",
  default: 0,
});

export const cartTotal = atom({
  key: "cartTotal",
  default: 0,
});

export const withDelivery = atom({
  key: "withDelivery",
  default: true,
});

export const deliveryFee = atom({
  key: "deliveryFee",
  default: 5,
});

export const formState = atom({
  key: "formState",
  default: {},
});

//SELECTORS
export const itemsList = selector({
  key: "itemsList",
  get: async ({ get }) => {
    const category = get(selectedCategory);
    const sort = get(sortMode);
    const search = get(searchValue);
    let url = `/api?category=${category}&sort=${sort}`;

    if (search.length > 0) {
      url += `&search=${search}`;
    }

    return await fetcher(url);
  },
});

export const refreshCart = selector({
  key: "refreshCart",
  set: ({ get, set }, { item, n }) => {
    const currentCart = { ...get(cart) };

    if (n === 1) {
      // add item to cart
      currentCart[item.id] = { ...item, qty: 1 };
    } else if (n > 0 && n <= item.stock) {
      // refresh item in cart
      currentCart[item.id] = { ...item, qty: n };
    } else if (n < 1) {
      // remove item to cart
      delete currentCart[item.id];
    }

    const cartToArray = Object.values(currentCart);
    let total = 0;
    cartToArray.forEach((item) => {
      const actualPrice = item.offerPrice || item.price;
      total += actualPrice * item.qty;
    });

    set(cart, currentCart); //set cart state
    set(cartLength, cartToArray.length); //set cart lenght
    set(cartTotal, total); //set cart total
  },
});

export const orderDetails = selector({
  key: "orderDetails",
  get: ({ get }) => {
    const cartItems = get(cart);
    const subTotal = get(cartTotal);
    const delivery = get(withDelivery);
    const shippingCost = get(deliveryFee);
    const formData = get(formState);

    const total = delivery ? subTotal + shippingCost : subTotal;

    return {
      cartItems,
      subTotal: subTotal.toFixed(2),
      withDelivery: delivery,
      shippingCost: shippingCost.toFixed(2),
      total: total.toFixed(2),
      formData,
    };
  },
});

export const resetState = selector({
  key: "resetState",
  set: ({ get, set }) => {
    set(selectedCategory, "all");
    set(sortMode, "Ascending");
    set(withDelivery, true);
    set(cart, {});
    set(cartLength, 0);
    set(cartTotal, 0);
    set(formState, {});
  },
});
