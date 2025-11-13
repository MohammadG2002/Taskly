// onClick={() => {
//         // Create a new card object
//         const newCard = {
//           id: Date.now(), // unique id
//           title: "New Card",
//           reporter: "You",
//           labels: [],
//           dueDate: "",
//           priority: "low",
//           description: "",
//           attachments: [],
//           assignees: [],
//           subtasks: [],
//           comments: [],
//         };
//         // Add the card to the correct column
//         const updatedBoard = {
//           ...board,
//           columns: board.columns.map(col =>
//             col.id === column.id
//               ? { ...col, cards: [...col.cards, newCard] }
//               : col
//           ),
//         };
//         setBoard(updatedBoard);
//       }}

const handleNewCard = ({ selector }: { selector: string }) => {
  const newCard = {
    id: Date.now(),
    title: "New Card",
    reporter: "You",
    labels: [],
    dueDate: "",
    priority: "low",
    description: "",
    attachments: [],
    assignees: [],
    subtasks: [],
    comments: [],
  };

  const updatedBoard ={
    ...board,
    columns: board.columns.map(col =>
      col.id === column.id
  }
}

export default handleNewCard;
