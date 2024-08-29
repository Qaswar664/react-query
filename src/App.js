import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetail';
import Testing from './components/Testing';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* <Route path="/" element={<Testing/> } /> */}
          
          <Route path="/" element={<ProductsPage/>} />
          <Route path="/product/:id" element={<ProductDetailPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
