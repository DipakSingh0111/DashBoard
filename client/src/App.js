import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import SingUp from "./component/SingUp";
import PrivateComponent from "./component/PrivateComponent";
import Login from "./component/Login";
import AddProduct from "./component/AddProduct";
import ProductList from "./component/ProductList";
import UpdateProduct from "./component/UpdateProduct";
// import Profile from "./component/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<ProductList />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/update/:id" element={<UpdateProduct />} />
            <Route path="/logout" element={<h1>Logout Page</h1>} />
            {/* <Route path="/profile" element={} /> */}
          </Route>

          <Route path="/singup" element={<SingUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
