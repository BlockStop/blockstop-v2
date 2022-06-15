import React, { Suspense } from "react";
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

const HomePage = React.lazy(() => import('./pages/Home/HomePage'));
const MainPage = React.lazy(() => import('./pages/Main'));

function App(props) {

  return (    
    <Suspense fallback={<p>loading</p>}>
      <Router>
        <Routes>
            <Route path='/' element={<MainPage />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;