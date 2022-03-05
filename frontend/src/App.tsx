import React from 'react';

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { HomePage } from './pages';

const App = function () {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
      </Routes>
    </Router>
  );
};

export default React.memo(App);
