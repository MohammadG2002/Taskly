import users from "./users.json";

const initialBoard = {
  columns: [
    {
      id: 1,
      title: "To Do",
      cards: [
        {
          id: 1,
          title: "Add card",
          reporter: users[0].name,
          labels: ["feature", "frontend"],
          dueDate: "15/Nov/2025",
          priority: "medium",
          description: "Add capability to add a card in a column",
          attachments: [
            "/attachments/cover-12.webp",
            "/attachments/cover-14.webp",
          ],
          assignees: [users[1].name, users[2].name],
          subtasks: [1],
          comments: [1],
        },
      ],
    },
    {
      id: 2,
      title: "In Progress",
      cards: [
        {
          id: 2,
          title: "Design Homepage",
          reporter: users[1].name,
          labels: ["design", "ui/ux"],
          dueDate: "20/Nov/2025",
          priority: "high",
          description: "Create wireframes and mockups for the homepage",
          attachments: ["/attachments/cover-13.webp"],
          assignees: [users[0].name],
          subtasks: [2],
          comments: [2],
        },
      ],
    },
    {
      id: 3,
      title: "Ready to test",
      cards: [],
    },
    {
      id: 4,
      title: "Done",
      cards: [],
    },
  ],
};

export default initialBoard;
