import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Home from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './pages/AppLayout';
import Login from './pages/Login';
import CityList from './components/CityList';
import CountryList from './components/CountryList';
import City from './components/City';
import Form from './components/Form';
import { CityProvider } from './contexts/CitiesProvider';

function App() {
  return (
    <CityProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="product"
            element={<Product />}
          />
          <Route
            path="pricing"
            element={<Pricing />}
          />
          <Route
            index
            element={<Home />}
          />
          <Route
            path="*"
            element={<PageNotFound />}
          />

          <Route
            path="app"
            element={<AppLayout />}
          >
            <Route
              index
              element={
                <Navigate
                  replace
                  to="cities"
                />
              }
            />
            <Route
              path="cities"
              element={<CityList />}
            ></Route>
            <Route
              path="cities/:id"
              element={<City />}
            ></Route>
            <Route
              path="countries"
              element={<CountryList />}
            ></Route>
            <Route
              path="form"
              element={<Form />}
            />
          </Route>

          <Route
            path="/login"
            element={<Login />}
          />
        </Routes>
      </BrowserRouter>
    </CityProvider>
  );
}

export default App;
