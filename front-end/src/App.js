import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from "./components/nav"
import Footer  from './components/footer';
import  SignUp  from './components/signUp';
import PrivateComponent  from './components/PrivateComponent';
import AddProduct from './components/AddProduct';
import ProductList from "./components/ProductList"
import UpdateProduct from "./components/UpdateComponent"
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>

         <Route element={<PrivateComponent/>}>
            <Route path='/' element={<ProductList />} />
            <Route path='/add' element={<AddProduct/>} />
            <Route path='/update/:id' element={<UpdateProduct />} />
            <Route path='/logout' element={<h1>Logout Components</h1>} />
            <Route path='/profile' element={<h1>Profile Components</h1>} />
          </Route>

          <Route path='/signUp' element={<SignUp/>} />
          <Route path='/login' element={<Login/>} />

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
