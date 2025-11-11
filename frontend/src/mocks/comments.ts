import users from "./users.json";

const comments = {
  1: [
    {
      id: 1,
      user: users[1].name,
      content: "This is a comment on card 1",
      timestamp: "2024-10-01T10:00:00Z",
    },
    {
      id: 2,
      user: users[2].name,
      content: "Another comment on card 1",
      timestamp: "2024-10-02T12:30:00Z",
    },
  ],
  2: [
    {
      id: 1,
      user: users[0].name,
      content: "Comment on card 2",
      timestamp: "2024-10-03T09:15:00Z",
    },
  ],
};

export default comments;
