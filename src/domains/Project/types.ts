export interface Project {
    id: number;
    name: string;
    description: string;
    dueDate: string;
    completed: boolean;
  }
  
  export interface ProjectState {
    projects: Project[];
    loading: boolean;
    error: string | null;
  }