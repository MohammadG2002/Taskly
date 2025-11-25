import type { Priority } from "./Priority";
import type { User } from "./User";

export interface BoardCard {
  columnId: number;
  id: number;
  title: string;
  reporter: User;
  labels: string[];
  dueDate: string;
  priority: Priority;
  description: string;
  attachments: string[];
  assignees: User[];
  subtasks: number[];
  comments: number[];
}
