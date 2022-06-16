import React, { Suspense } from "react";
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import CustomLoader from "./components/CustomLoader/CustomLoader";
import './App.css';

const MainPage = React.lazy(() => import('./pages/Main'));

function App(props) {

  return (    
    <Suspense fallback={<CustomLoader/>}>
      <Router>
        <Routes>
            <Route path='/' element={<MainPage />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;