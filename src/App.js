
import './App.css';
import Footer from './customer/components/footer/Footer';
import Navigation from './customer/components/navigation/Navigation';
import Product from './customer/components/product/Product';
import ProductDetails from './customer/components/productDetail/ProductDetails';
import HomePage from './customer/pages/HomePage';
import Cart from './customer/components/cart/Cart';
import Checkout from './customer/components/checkout/Checkout';
function App() {
  return (
    <div className="App">
      <Navigation/>
      {/* <HomePage/> */}
      {/* <Product/> */}
      {/* <ProductDetails/> */}
      {/* <Cart/> */}
      <Checkout/>
      <Footer/>
    </div>
  );
}

export default App;
