import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import{createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom"
import { Provider } from 'react-redux'
import { store } from './store'
import Home from './components/Home';
import AdvirserOne from './pages/AdvirserOne';
import AnimalOne from './pages/AnimalOne';
import AnimalTwo from './pages/AnimalTwo';
import AnimalThree from './pages/AnimalThree';
import AdvirserTwo from './pages/AdviserTwo';
import AdvirserThree from './pages/AdviserThree';
import Seller from './pages/Seller';
import About from './pages/About';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import SingleProduct from './pages/SingleProduct';
import SingleBlog from './pages/SingleBlog';
import Shop from './pages/Shop';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<Home />} />
      <Route path='/volailles/poules-pondeuses' element={<AnimalOne />} />
      <Route path='/volailles/poulets-pintades' element={<AnimalTwo />} />
      <Route path='/volailles/volailles-festives' element={<AnimalThree />} />
      <Route path='/conseils/poules-pondeuses' element={<AdvirserOne />} />
      <Route path='/conseils/poulets-pintades' element={<AdvirserTwo />} />
      <Route path='/conseils/volailles-festives' element={<AdvirserThree />} />
      <Route path='/points-distribution' element={<Seller />} />
      <Route path='/qui-sommes-nous' element={<About />} />
      
      <Route path='/faq' element={<Faq />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/product/:id' element={<SingleProduct />} />
      <Route path='/productTwo/:id' element={<SingleBlog />} />
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  
)
reportWebVitals();
