import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import ProjectItem from './ProjectItem';
import { fetchProjects } from '../projectSlice';
import { useAppDispatch } from '../../../hooks/hooks';

const ProjectList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { projects, loading, error } = useSelector((state: RootState) => state.project);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default ProjectList;