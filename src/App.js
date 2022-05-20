import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from './Components/Layout';
import Men from './Components/Categories/Men';
import Kids from './Components/Categories/Kids';
import Cart from './Components/Other_pages/Cart';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="/men" element={<Men />} />
            <Route path="/kids" element={<Kids />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
        </Routes>
    </div>
  );
}

export default App;
