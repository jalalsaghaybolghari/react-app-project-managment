import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Project, ProjectState } from "./types";
import * as projectService from "./services/projectService";

const initialState: ProjectState = {
  projects: [],
  loading: false,
  error: null,
};

// Thunks
export const fetchProjects = createAsyncThunk(
  "project/fetchProjects",
  async () => {
    return await projectService.fetchProjects();
  }
);

export const addProject = createAsyncThunk(
  "project/addProject",
  async (project: Project) => {
    return await projectService.createProject(project);
  }
);

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    // Define synchronous actions here if needed
    // createProject(state, action: PayloadAction<Project>) {
    //   state.projects.push(action.payload);
    // },
    // toggleProject(state, action: PayloadAction<string>) {
    //   const project = state.projects.find((t) => t.id === action.payload);
    //   if (project) project.completed = !project.completed;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch projects";
      });
  },
});

// export const { addProject, toggleProject } = projectSlice.actions;
export default projectSlice.reducer;
