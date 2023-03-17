import './App.css';
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Pagenotfound from './pages/Pagenotfound';
import Policy from './pages/Policy.js';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import ForgotPasssword from './pages/Auth/ForgotPasssword';
import AdminRoute from './components/Routes/AdminRoute';
import AdminDashboard from './pages/Admin/AdminDashboard';
import CreateCategory from './pages/Admin/CreateCategory';
import CreateProduct from './pages/Admin/CreateProduct';
import Products from './pages/Admin/Products';
import Profile from './pages/user/Profile';
import Orders from './pages/user/Orders';
import UpdateProduct from './pages/Admin/UpdateProduct';
import Search from './pages/Search';
import ProductDetails from './pages/ProductDetails';
import Categories from './pages/Categories';
import CategoryProduct from './pages/CategoryProduct';
import CartPage from './pages/CartPage';
import AdminOrders from './pages/Admin/AdminOrders';
function App() {
  return (
    <>
       <Routes>
         <Route path='/' element={<HomePage/>}/>
         <Route path='/categories' element={<Categories/>}/>
         <Route path='/category/:slug' element={<CategoryProduct/>}/>
         <Route path='/cart' element={<CartPage/>}/>
         <Route path='/product/:pid' element={<ProductDetails/>}/>
         <Route path='/search' element={<Search/>}/>
         <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/profile" element={<Profile/>}/>
          <Route path="user/orders" element={<Orders/>}/>
        </Route>
        <Route path="/dashboard" element={<AdminRoute/>}>
          <Route path="admin" element={<AdminDashboard/>} />
          <Route path="admin/create-category" element={<CreateCategory/>} />
          <Route path="admin/create-product" element={<CreateProduct/>} />
          <Route path="admin/orders" element={<AdminOrders/>} />
          <Route path="admin/products" element={<Products/>} />
          <Route path="admin/product/:slug" element={<UpdateProduct/>} />
        </Route>
         <Route path='/about' element={<About/>}/>
         <Route path='/register' element={<Register/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/forgot-password' element={<ForgotPasssword/>} />
         <Route path='/contact' element={<Contact/>}/>
         <Route path='*' element={<Pagenotfound/>}/>
         <Route path='/policy' element={<Policy/>}/>
       </Routes>
    </>
  );
}

export default App;