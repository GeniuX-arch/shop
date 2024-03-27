
import './styles.css'
import Product from './views/Product'
import Home from './views/Home'
import Cart from './views/Cart'
import { Routes,Route } from 'react-router-dom'


const Error404 = () => {
  return (
    <div>
      <h2>Error 404</h2>
      <p>La página que estás buscando no se pudo encontrar.</p>
    </div>
  );
};
function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Product/:id" element={<Product />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      
    </>
  )
}

export default App
