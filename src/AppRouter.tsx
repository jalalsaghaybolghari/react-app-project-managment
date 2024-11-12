import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectRoutes from './domains/Project/ProjectRouter';

const AppRouter: React.FC = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
       
        <Route path="/*" element={<ProjectRoutes />} />

      </Routes>
    </Suspense>
  </Router>
);

export default AppRouter;