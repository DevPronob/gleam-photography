import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Blog from './components/Blog/Blog';
import Checkout from './components/Checkout/Checkout';
import Home from './components/Home/Home';
import Header from './components/Others/Header/Header';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Footer from './components/Others/Footer/Footer';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      {/* header */}
      <Header></Header>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/checkout" element={
        <RequireAuth>
          <Checkout></Checkout>
          </RequireAuth>} />
      </Routes>
    </div>
  );
}

export default App;
