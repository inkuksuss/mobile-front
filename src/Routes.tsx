import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';
import Header from './components/Header';
import Footer from './components/Footer';

const Main = lazy(() => import('./views/Main'));
const Login = lazy(() => import('./views/member/Login'));
const Join = lazy(() => import('./views/member/Join'));

export default function MobileRoutes() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}
