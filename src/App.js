import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import { Product } from './components/Product';
import { ProductProvider } from './components/ProductContext';

function App() {
  return (
    <div className="App">
    <header> Our Header</header>
    <ProductProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:productId' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
    </div>
  );
}

export default App;
