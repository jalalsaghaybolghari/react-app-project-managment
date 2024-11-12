import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const ProjectList = lazy(() => import("./components/ProjectList"));

const ProjectRoutes: React.FC = () => (
  <Routes>
    <Route path="project">
      <Route index element={<Navigate to="list" replace />} />
      <Route path="list" element={<ProjectList />} />
    </Route>
  </Routes>
);

export default ProjectRoutes;
