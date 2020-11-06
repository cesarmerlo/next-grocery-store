import { useRecoilValue } from "recoil";
import { cart } from "../recoil/state";

export default function useIsInCart(item) {
  const currentCart = useRecoilValue(cart);
  return currentCart[item.id] ? currentCart[item.id].qty : 0;
}
