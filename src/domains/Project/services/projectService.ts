
import axios from 'axios';
import { Project } from '../types';

const API_BASE_URL = 'https://api.example.com/projects';

export const fetchProjects = async (): Promise<Project[]> => {
  const response = await axios.get<Project[]>(`${API_BASE_URL}`);
  return response.data;
};

export const createProject = async (project: Project): Promise<Project> => {
  const response = await axios.post<Project>(`${API_BASE_URL}`, project);
  return response.data;
};

export const updateProject = async (projectId: string, updatedData: Partial<Project>): Promise<Project> => {
  const response = await axios.put<Project>(`${API_BASE_URL}/${projectId}`, updatedData);
  return response.data;
};

export const deleteProject = async (projectId: string): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/${projectId}`);
};