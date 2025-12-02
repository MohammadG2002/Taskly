import usersJson from "./users.json";
import type { BoardCard } from "../types/BoardCard";
import type { User } from "../types/User";
import { Priority } from "../types/Priority";
import labelsJson from "./labels.json";
import type { Label } from "../types/Label";

const users = usersJson as User[];
const labels = labelsJson as Label[];

const kanbanCards: Record<number, BoardCard[]> = {
  1: [
    {
      columnId: 1,
      id: 1,
      title: "Add card",
      reporter: users[0],
      taskLabels: [labels[0]],
      startDate: "10/Nov/2025",
      dueDate: "15/Nov/2025",
      priority: Priority.Medium,
      description: "Add capability to add a card in a column",
      attachments: ["/attachments/cover-12.webp", "/attachments/cover-14.webp"],
      assignees: [users[1], users[2], users[0], users[1]],
      subtasks: [1],
      comments: [1],
    },
    {
      columnId: 1,
      id: 2,
      title: "Design Homepage",
      reporter: users[1],
      taskLabels: [labels[1], labels[3]],
      startDate: "15/Nov/2025",
      dueDate: "20/Nov/2025",
      priority: Priority.High,
      description: "Create wireframes and mockups for the homepage",
      attachments: ["/attachments/cover-13.webp"],
      assignees: [users[0]],
      subtasks: [2],
      comments: [2],
    },
  ],
  2: [
    {
      columnId: 2,
      id: 3,
      title: "Implement Authentication",
      reporter: users[2],
      taskLabels: [labels[4], labels[1]],
      startDate: "20/Nov/2025",
      dueDate: "25/Nov/2025",
      priority: Priority.High,
      description: "Set up user authentication and authorization",
      attachments: [],
      assignees: [users[2]],
      subtasks: [],
      comments: [],
    },
  ],
  3: [
    {
      columnId: 3,
      id: 4,
      title: "Testing Payment Gateway",
      reporter: users[0],
      taskLabels: [labels[3], labels[2]],
      startDate: "25/Nov/2025",
      dueDate: "30/Nov/2025",
      priority: Priority.Medium,
      description: "Test the integration of the payment gateway",
      attachments: ["/attachments/cover-15.webp"],
      assignees: [users[1]],
      subtasks: [],
      comments: [],
    },
    {
      columnId: 3,
      id: 5,
      title: "Code Review for New Features",
      reporter: users[1],
      taskLabels: [labels[0]],
      startDate: "28/Nov/2025",
      dueDate: "02/Dec/2025",
      priority: Priority.Low,
      description: "Review code for the newly implemented features",
      attachments: [],
      assignees: [users[2]],
      subtasks: [],
      comments: [],
    },
    {
      columnId: 3,
      id: 6,
      title: "Deploy to Staging",
      reporter: users[2],
      taskLabels: [labels[2], labels[4]],
      startDate: "01/Dec/2025",
      dueDate: "05/Dec/2025",
      priority: Priority.High,
      description:
        "Deploy the latest build to the staging environment for final testing",
      attachments: [],
      assignees: [users[0], users[1]],
      subtasks: [],
      comments: [],
    },
  ],
  4: [
    {
      columnId: 4,
      id: 7,
      title: "Finalize Project Documentation",
      reporter: users[0],
      taskLabels: [labels[3], labels[2]],
      startDate: "05/Dec/2025",
      dueDate: "10/Dec/2025",
      priority: Priority.Medium,
      description: "Complete and review all project documentation",
      attachments: [],
      assignees: [users[0], users[2]],
      subtasks: [],
      comments: [],
    },
  ],
};

export default kanbanCards;
