import "./styles/App.scss";
import Main from "./pages/main";
import Header from "./components/header/header";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./pages/add-product/add-product";
import Login from "./components/Login/Login";

function App() {
  return (
    <div>
        <Header />
      <Routes>
        <Route path="/login" element={<Login />}></Route>

        <Route path="/" element={<Main />}></Route>
        <Route path="/add" element={<AddProduct />}></Route>
      </Routes>
    </div>
  );
}

export default App;
