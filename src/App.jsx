import "./styles/App.scss";
import Main from "./pages/main";
import Header from "./components/header/header";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./pages/add-product/add-product";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
        <Routes>
            <Route path="/add" element={<AddProduct />}></Route>
        </Routes>
    </div>
  );
}

export default App;
