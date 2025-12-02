import type { Priority } from "./Priority";
import type { User } from "./User";
import type { Comment } from "./Comment";
import type { Label } from "./Label";

export interface BoardCard {
  columnId: number;
  id: number;
  title: string;
  reporter: User;
  taskLabels: Label[];
  startDate: string;
  dueDate: string;
  priority: Priority;
  description: string;
  attachments: string[];
  assignees: User[];
  subtasks: number[];
  comments: Comment[];
}
