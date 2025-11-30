import usersJson from "./users.json";
import type { User } from "../types/User";
import type { Comment } from "../types/Comment";

const users = usersJson as User[];

export const cardComments: Comment[] = [
  {
    id: 1,
    user: users[1],
    content: "This is a comment on card 1",
    timestamp: "2024-10-01T10:00:00Z",
    attachments: ["/attachments/cover-12.webp"],
  },
  {
    id: 2,
    user: users[2],
    content: "Another comment on card 1",
    timestamp: "2024-10-02T12:30:00Z",
    attachments: [],
  },
  {
    id: 3,
    user: users[0],
    content: "Comment on card 2",
    timestamp: "2024-10-03T09:15:00Z",
    attachments: ["/attachments/cover-13.webp", "/attachments/cover-14.webp"],
  },
  {
    id: 4,
    user: users[0],
    content: "Great progress on this feature!",
    timestamp: "2024-10-04T14:20:00Z",
    attachments: [],
  },
  {
    id: 5,
    user: users[1],
    content: "I think we should also consider edge cases here.",
    timestamp: "2024-10-05T11:45:00Z",
    attachments: ["/attachments/cover-15.webp"],
  },
  {
    id: 6,
    user: users[2],
    content: "Let me know if you need any help with the backend integration.",
    timestamp: "2024-10-06T16:30:00Z",
    attachments: [],
  },
  {
    id: 7,
    user: users[5],
    content: "The design looks good, but we might need to adjust the colors.",
    timestamp: "2024-10-07T09:00:00Z",
    attachments: ["/attachments/cover-16.webp"],
  },
  {
    id: 8,
    user: users[1],
    content: "Testing is complete. Ready to merge!",
    timestamp: "2024-10-08T13:15:00Z",
    attachments: [],
  },
  {
    id: 9,
    user: users[2],
    content: "Can we schedule a review meeting for this?",
    timestamp: "2024-10-09T10:30:00Z",
    attachments: ["/attachments/cover-17.webp"],
  },
  {
    id: 10,
    user: users[0],
    content: "Documentation has been updated accordingly.",
    timestamp: "2024-10-10T15:45:00Z",
    attachments: [],
  },
];

export default cardComments;
