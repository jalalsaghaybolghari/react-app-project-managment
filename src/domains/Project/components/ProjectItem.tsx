import React from 'react';
import { Project } from '../types';

interface ProjectItemProps {
  project: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  return (
    <li>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <p>Due: {project.dueDate}</p>
      <p>Status: {project.completed ? 'Completed' : 'In Progress'}</p>
    </li>
  );
};

export default ProjectItem;