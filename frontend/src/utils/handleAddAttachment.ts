import type { BoardCard } from "../types/BoardCard";

export const handleAddAttachment = (
  card: BoardCard,
  forceUpdate: () => void
) => {
  const input = document.createElement("input");
  input.type = "file";
  input.onchange = (e) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (file) {
      card.attachments.push(file.name);
      forceUpdate();
    }
  };
  input.click();
};
