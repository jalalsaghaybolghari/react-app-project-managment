import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Project {
  id: string;
  title: string;
  completed: boolean;
}

interface ProjectState {
    projects: Project[];
}

const initialState: ProjectState = {
    projects: [],
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    addProject(state, action: PayloadAction<Project>) {
      state.projects.push(action.payload);
    },
    toggleProject(state, action: PayloadAction<string>) {
      const project = state.projects.find((t) => t.id === action.payload);
      if (project) project.completed = !project.completed;
    },
  },
});

export const { addProject, toggleProject } = projectSlice.actions;
export default projectSlice.reducer;