
import React from 'react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  return (
    <div>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <p>Due Date: {project.dueDate}</p>
      <p>Status: {project.completed ? 'Completed' : 'In Progress'}</p>
      {/* Additional UI for editing or deleting the project could go here */}
    </div>
  );
};

export default ProjectDetail;