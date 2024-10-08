import React from 'react';

// React Router
import { Route, Routes } from 'react-router-dom';

// Components
import Home from './pages/Home';
import Cart from './pages/Cart';
import About from './pages/About';
import Login from './pages/Login';
import Orders from './pages/Orders';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Collection from './pages/Collection';
import PlaceOrder from './pages/PlaceOrder';
import SearchBar from './components/SearchBar';

// Toast
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App = () => {
    return (
        <React.Fragment>
            <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
                <ToastContainer />
                <Navbar />
                <SearchBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/orders' element={<Orders />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/collection' element={<Collection />} />
                    <Route path='/place-order' element={<PlaceOrder />} />
                    <Route path='/product/:productId' element={<Product />} />
                </Routes>
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default App;