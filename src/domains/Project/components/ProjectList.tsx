import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../app/store';
import ProjectItem from './ProjectItem';
import { fetchProjects } from '../projectSlice';

const ProjectList: React.FC = () => {
  const dispatch = useDispatch();
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