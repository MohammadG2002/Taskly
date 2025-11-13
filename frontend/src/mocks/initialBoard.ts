import kanbanCards from "./kanbanCards";

const initialBoard = {
  columns: [
    {
      id: 1,
      title: "To Do",
      cards: kanbanCards[1],
    },
    {
      id: 2,
      title: "In Progress",
      cards: kanbanCards[2],
    },
    {
      id: 3,
      title: "Ready to test",
      cards: kanbanCards[3],
    },
    {
      id: 4,
      title: "Done",
      cards: kanbanCards[4],
    },
  ],
};

export default initialBoard;
