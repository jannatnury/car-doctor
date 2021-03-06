import './App.css';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import PageError from './components/PageError/PageError';
import Signin from './components/Pages/Signin';
import SignUp from './components/Pages/SignUp';
import Blogs from './components/Pages/Blogs';
import Services from './components/Pages/Services';
import Portfolio from './components/Pages/Portfolio';
import RequireAuth from './components/PrivateRoute/RequireAuth';
import Dashboard from './components/Dashboard/Dashboard';
import MyOrder from './components/Dashboard/MyOrder';
import MyReview from './components/Dashboard/MyReview';
import Profile from './components/Dashboard/Profile';
import EditProfile from './components/Dashboard/EditProfile';
import AddProduct from './components/Dashboard/AddProduct';
import ManageOrder from './components/Dashboard/ManageOrder';
import ManageUsers from './components/Dashboard/ManageUsers';
import DynamicParts from './components/Pages/DynamicParts';
import ManageProduct from './components/Dashboard/ManageProduct';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/sign-in" element={<Signin></Signin>}></Route>
        <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
        <Route path="/products" element={<Services></Services>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="/parts/:id" element={
          <RequireAuth>
            <DynamicParts></DynamicParts>
          </RequireAuth>
        }>
        </Route>
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<Profile></Profile>}></Route>
          <Route path="profile" element={<EditProfile></EditProfile>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="order" element={<MyOrder></MyOrder>}></Route>
          {/* Admin Routes */}
          <Route path="add-product" element={<AddProduct/>}></Route>
          <Route path="edit-product" element={<ManageProduct/>}></Route>
          <Route path="manage-order" element={<ManageOrder/>}></Route>
          <Route path="manage-user" element={<ManageUsers/>}></Route>
        </Route>
        <Route path="*" element={<PageError></PageError>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
