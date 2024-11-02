import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import{createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom"
import Home from './components/Home';
import AdvirserOne from './pages/AdvirserOne';
import AnimalOne from './pages/AnimalOne';
import AnimalTwo from './pages/AnimalTwo';
import AnimalThree from './pages/AnimalThree';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<Home />} />
      <Route path='/volailles/poules-pondeuses' element={<AnimalOne />} />
      <Route path='/volailles/poulets-pintades' element={<AnimalTwo />} />
      <Route path='/volailles/volailles-festives' element={<AnimalThree />} />
      <Route path='/conseils/poules-pondeuses' element={<AdvirserOne />} />
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
reportWebVitals();
