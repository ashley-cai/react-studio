import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import { BakeryItem } from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([])
  const [totalCart, setTotalCart] = useState(0)


  const addToCart = (name, price) => {
    console.log('adding to cart:', price)
    setCart(prev_cart => [...prev_cart, [name, price]]) 
    setTotalCart(totalCart+price)
  }

  const showCart = () => {
    if (cart.length === 0) {
      console.log('cart is empty')
      return <p>Cart is empty</p>
    }

    const jsxlist = cart.map((namePrice, index) => {
      console.log(namePrice)
      return <p key={index} > {namePrice[0]} $ {namePrice[1]}</p>
    })

    return jsxlist;
  }

  const showTotalCart = () => {
    return <p>TOTAL: $ {totalCart}</p>
  }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      <div class="bakery-item-wrapper">
        {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
          <BakeryItem name={item.name} desc={item.description} price={item.price} img={item.image} onClick={(e) => addToCart(item.name, item.price)} ></BakeryItem>
        ))}
      </div>

      <div class="cart-wrapper">
        <h2>Cart</h2>
        {showCart()}
        {showTotalCart()}

      </div>
    </div>
  );
}

export default App;
