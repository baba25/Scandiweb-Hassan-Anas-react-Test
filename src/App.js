import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from './Components/Layout';
import Tech from './Components/Categories/Tech';
import Clothes from './Components/Categories/Clothes';
import Cart from './Components/Other_pages/Cart';
import All from './Components/Categories/All';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<All />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/clothes" element={<Clothes />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
        </Routes>
    </div>
  );
}

export default App;
