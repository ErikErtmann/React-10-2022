import { Route, Routes } from 'react-router-dom'
import './App.css';
import HomePage from "./pages/HomePage"
import Cart from "./pages/Cart"
import Shops from "./pages/Shops"
import SingleProduct from "./pages/SingleProduct"
import AddProduct from "./pages/admin/AddProduct"
import EditProduct from "./pages/admin/EditProduct"
import AdminHome from "./pages/admin/AdminHome"
import MaintainCategories from "./pages/admin/MaintainCategories"
import MaintainProducts from "./pages/admin/MaintainProducts"
import MaintainShops from "./pages/admin/MaintainShops"
import NavigationBar from './components/NavigationBar'

function App() {
  return (
  <div className="App">
    
    <NavigationBar />

    <Routes>
      <Route path="" element={ <HomePage /> } />
      <Route path="cart" element={ <Cart />} />
      <Route path="shops" element={ <Shops />} />
      <Route path="product" element={ <SingleProduct />} />
      <Route path="admin" element={<AddProduct />} />
      <Route path="admin/add-product" element={<EditProduct />} />
      <Route path="admin/edit-products" element={<AdminHome />} />
      <Route path="admin/maintain-products" element={<MaintainCategories />} />
      <Route path="admin/maintain-categories" element={<MaintainProducts />} />
      <Route path="admin/maintain-shops" element={<MaintainShops />} />
    </Routes>
  </div>
  );
}

export default App;
