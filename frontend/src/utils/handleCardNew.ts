interface CardType {
  e: React.KeyboardEvent<HTMLInputElement>;
  column: any;
  bag: any;
  setNewCard: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function handleCardNew({
  e,
  column,
  bag,
  setNewCard,
}: CardType) {
  if (e.key === "Enter") {
    if (!e.currentTarget.value.trim()) return setNewCard(false);
    bag.addCard({
      columnId: column.id,
      id: Date.now(),
      title: e.currentTarget.value,
      reporter: "",
      labels: [],
      dueDate: "",
      priority: "low",
      description: "",
      attachments: [],
      assignees: [],
      subtasks: [],
      comments: [],
    });
    setNewCard(false);
  }
  if (e.key === "Escape") {
    setNewCard(false);
  }
}
