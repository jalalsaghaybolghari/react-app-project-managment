import React from 'react';
import ProjectList from './domains/Project/components/ProjectList';

const App: React.FC = () => {
  return (
    <div>
      <h1>Project Management</h1>
      <ProjectList />
    </div>
  );
};

export default App;