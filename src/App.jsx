import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CityProvider } from "./context/CityContext";
import { AuthProvider } from "./context/FakeAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

import City from "./components/City";
import Form from "./components/Form";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import AppLayout from "./pages/AppLayout";
import SpinnerFullPage from "./components/SpinnerFullPage";
const Homepage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Login = lazy(() => import("./pages/Login"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <CityProvider>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </CityProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
