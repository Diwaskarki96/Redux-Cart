import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./components/CartContainer";
import NavBar from "./components/NavBar";
import { useEffect } from "react";
import { calculateTotal } from "./store/slice/cartSlice";

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);
  return (
    <main>
      <NavBar />
      <CartContainer />
    </main>
  );
}
export default App;
